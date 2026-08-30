# THIAGO IA V32.5 — Base de datos permanente

Base: V32.4 Pagos y Comprobantes. El diseño NEÓN PREMIUM y las funciones existentes se conservan.

## Nuevo
- Persistencia en PostgreSQL mediante `DATABASE_URL`.
- Guarda usuarios, códigos, solicitudes de plan, pagos/comprobantes, configuración bancaria, planes, vencimientos y uso de imágenes.
- Migración automática: si PostgreSQL está vacío y existe `data.json`, lo importa al primer arranque.
- Si `DATABASE_URL` aún no está configurada, la aplicación sigue funcionando con `data.json` para no interrumpir el servicio.
- Endpoint administrativo `/api/storage-status` para comprobar si PostgreSQL está conectado.

## Render
El proyecto incluye `render.yaml` con una base `thiago-ia-db` y la variable `DATABASE_URL`. En un servicio Render ya existente, puede ser necesario crear PostgreSQL desde el panel de Render y agregar su Internal Database URL como `DATABASE_URL` en Environment.

No coloque contraseñas ni URLs privadas de la base de datos dentro de GitHub.
