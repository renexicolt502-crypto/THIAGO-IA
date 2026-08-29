import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import OpenAI from 'openai';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet({
  contentSecurityPolicy: false
}));
app.use(express.json({ limit: '1mb' }));

const limiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false
});
app.use('/api', limiter);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'THIAGO IA' });
});

app.post('/api/chat', async (req, res) => {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return res.status(503).json({
        error: 'Falta configurar OPENAI_API_KEY en el servidor.'
      });
    }

    const { message, type = 'TEXTO', history = [] } = req.body || {};

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Escribe una solicitud.' });
    }

    if (message.length > 12000) {
      return res.status(400).json({ error: 'La solicitud es demasiado larga.' });
    }

    const safeHistory = Array.isArray(history)
      ? history.slice(-12).filter(x =>
          x &&
          (x.role === 'user' || x.role === 'assistant') &&
          typeof x.content === 'string'
        )
      : [];

    const input = [
      ...safeHistory.map(x => ({
        role: x.role,
        content: x.content
      })),
      {
        role: 'user',
        content: message.trim()
      }
    ];

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || 'gpt-5.4',
      instructions:
        'Eres THIAGO IA, un asistente útil, claro y profesional. Responde en español salvo que el usuario pida otro idioma. ' +
        'Ayuda con redacción, ideas, correcciones, investigación general y tareas de productividad. ' +
        'Si el tipo solicitado es IMAGEN, explica brevemente que esta ruta todavía responde por texto y que el generador de imágenes se conectará por separado.',
      input
    });

    const answer = response.output_text?.trim();

    if (!answer) {
      return res.status(502).json({ error: 'La IA no devolvió una respuesta de texto.' });
    }

    res.json({
      ok: true,
      answer,
      model: process.env.OPENAI_MODEL || 'gpt-5.4'
    });
  } catch (error) {
    console.error('THIAGO IA error:', error);
    const status = error?.status && Number.isInteger(error.status) ? error.status : 500;
    res.status(status).json({
      error: status === 401
        ? 'La clave de API no es válida.'
        : status === 429
        ? 'Se alcanzó temporalmente el límite de la API. Intenta de nuevo en un momento.'
        : 'Ocurrió un error al consultar la IA.'
    });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`THIAGO IA disponible en http://localhost:${port}`);
});
