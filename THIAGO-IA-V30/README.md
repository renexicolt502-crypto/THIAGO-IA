# THIAGO IA V33 FINAL — PWA + SESIONES PERSISTENTES

Incluye:
- Aplicación web instalable (PWA) para abrir THIAGO IA como app.
- Iconos 192 y 512, manifest y service worker.
- Sesiones de cliente y administrador persistentes por 30 días, almacenadas en PostgreSQL mediante hash del token.
- Cerrar sesión invalida la sesión guardada.
- Reinicios o suspensión/activación de Render ya no deben expulsar al cliente mientras su sesión siga vigente.
- El navegador conserva el token en almacenamiento local para reabrir la app sin volver a iniciar sesión.
- Al solicitar un plan, la pantalla de pago preselecciona ese plan.
- Conserva pagos, comprobantes, PostgreSQL, código permanente, planes, límites y diseño NEÓN PREMIUM.

Despliegue: reemplazar el contenido de la carpeta existente THIAGO-IA-V30 en GitHub y dejar que Render haga Auto-Deploy. No cambie DATABASE_URL ni las demás variables de entorno.
