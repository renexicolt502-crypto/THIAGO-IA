# THIAGO IA V30.6 — mejoras solicitadas

Incluye sobre V30.5:
- Enter envía; Shift+Enter crea salto de línea.
- El cuadro se limpia inmediatamente al enviar.
- Desplazamiento automático y estado “THIAGO IA está trabajando…”.
- Nuevo chat e historial separado por conversaciones.
- Inicio vuelve al chat limpio y no abre Investigación.
- Fondo sin zoom excesivo (`contain`).
- Generación de imágenes con instrucciones de acabado profesional y `quality: high`.
- Modificación real de imágenes mediante endpoint de imágenes.
- Nueva herramienta de restauración fotográfica profesional, con modo color original o colorización.
- Barra diaria verde de imágenes. Texto no consume.
- Reinicio diario de la barra a las 6:00 a. m. hora de Guatemala.
- Capacidad interna por plan: Básico 10, PRO 20, Negocio 30 operaciones de imagen por ciclo diario. El cliente ve porcentaje 100–0%.
- Se conservan códigos de acceso, planes, aprobaciones, vencimientos y renovaciones.

## Render
Mantener `OPENAI_API_KEY`, `OPENAI_MODEL` y opcionalmente `OPENAI_IMAGE_MODEL`. La clave de administrador puede configurarse con `ADMIN_KEY`.

> Nota: Render Free usa disco efímero; para producción real conviene migrar usuarios/consumos a una base de datos persistente.
