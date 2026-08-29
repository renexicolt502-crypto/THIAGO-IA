# THIAGO IA V27 — Diseño aprobado + fondo original incrustado

Esta versión toma la V25 real y aplica el diseño aprobado por el usuario.

Puntos importantes:
- El fondo original `fondos(4).png` está INCRUSTADO dentro del HTML.
- Por eso el fondo no depende de una ruta externa y debe verse incluso al abrir el HTML desde Descargas.
- Se conserva el backend de IA real.
- Herramientas, Historial, Planes, Mi cuenta, Configuración y Ayuda están dentro de botones/paneles.
- El chat continúa usando `/api/chat` cuando el proyecto se ejecuta con el servidor.

Render:
Build Command: npm install
Start Command: npm start
Variable secreta: OPENAI_API_KEY
