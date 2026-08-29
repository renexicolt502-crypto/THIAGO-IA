# THIAGO IA V30.1

Base modular funcional para Render/GitHub.

## Incluye
- Acceso de cliente por correo + código temporal de 6 dígitos (10 minutos, un uso).
- Registro de cliente nuevo.
- Panel Cliente con chat IA, plan activo, cambio de plan y cierre de sesión.
- Panel Administrador con solicitudes de acceso, usuarios, solicitudes de plan, renovaciones, pagos/configuración base y cierre de sesión.
- Aprobación/rechazo de cambio de plan; al aprobar activa 30 días.
- OpenAI solo desde backend mediante OPENAI_API_KEY.
- Fondo original en `public/assets/fondo.png`.

## Render
Build: `npm install`
Start: `npm start`
Variables: `OPENAI_API_KEY`, `OPENAI_MODEL=gpt-5.4`, `ADMIN_KEY`.

## Importante
`data.json` es almacenamiento local de esta primera entrega. En Render puede reiniciarse al redeploy/restart. Antes de usar con clientes reales, conectar una base de datos persistente (PostgreSQL).

Si `ADMIN_KEY` no está configurada, la clave temporal de desarrollo es `THIAGO2026`. Configure `ADMIN_KEY` en Render antes de uso real.


## V30.3 - Selección de planes
Los planes públicos ahora son seleccionables. La elección se conserva durante el acceso por correo/código y, al verificar el código, se crea automáticamente una solicitud de plan pendiente de aprobación del administrador.
