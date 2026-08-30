# THIAGO IA V32.6 — Acceso permanente

Base: V32.5 con PostgreSQL permanente.

## Cambio solicitado
- El primer código de 6 dígitos sigue siendo aprobado/entregado por Administración y vence en 10 minutos antes de su primer uso.
- Al validarlo correctamente por primera vez, ese mismo código queda guardado en PostgreSQL como código de acceso permanente del cliente.
- Después de cerrar sesión, el cliente entra con su correo + el mismo código permanente, sin solicitar otro código al administrador.
- Renovar el plan conserva el mismo acceso permanente.
- Se conserva el diseño NEÓN PREMIUM, pagos, comprobantes, planes, administración, historial, herramientas y demás funciones de V32.5.

## Render
Mantener `DATABASE_URL` configurada. No subir credenciales a GitHub.
