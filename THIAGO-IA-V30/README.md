# THIAGO IA V31 — flujo simple de imágenes

Cambios principales:
- Un solo flujo: adjunta/pega imagen + escribe instrucción + Enter.
- Sin botones de Generar/Modificar/Restaurar en el chat; THIAGO IA decide si editar o generar.
- Una imagen adjunta siempre se procesa como edición estricta de la original.
- La imagen original se muestra arriba y la instrucción debajo antes del resultado.
- El historial ya no guarda imágenes Base64 en localStorage, evitando `thiago_history excedió la cuota`.
- Historial y conversaciones usan guardado seguro y reducido.
- Errores de saldo/límite del proveedor se distinguen del porcentaje diario de THIAGO IA.
- Se conservan investigación, OCR, traducción, archivos descargables, planes, vencimientos y administración.
