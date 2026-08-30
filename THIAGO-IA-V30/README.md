# THIAGO IA V32.7 — Vencimiento y renovación

Base: V32.6 estable.

Cambios enfocados únicamente en ciclo de plan:
- El plan vence automáticamente al llegar `planExpires`.
- Chat, imágenes, vectorización y exportaciones quedan bloqueados cuando no hay plan vigente.
- El cliente conserva su correo + código permanente; el vencimiento no elimina ni cambia ese código.
- La interfaz muestra claramente PLAN VENCIDO y Renovación requerida.
- El plan actual muestra RENOVAR PLAN incluso si ya venció.
- Renovación anticipada del mismo plan suma 30 días desde el vencimiento actual si aún está vigente.
- Renovación de un plan ya vencido suma 30 días desde el momento de aprobación.
- La aprobación de pago/renovación reactiva el plan y registra la fecha de aprobación.
- Administración conserva Usuarios, Pagos, Renovaciones, Configuración y el diseño NEÓN PREMIUM.
- PostgreSQL y DATABASE_URL se mantienen sin cambios.

Precios conservados: BÁSICO Q85, PRO Q180, NEGOCIO Q300 / 30 días.
