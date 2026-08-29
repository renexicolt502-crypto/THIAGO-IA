# THIAGO IA V30.8

Actualización sobre V30.7, conservando sus funciones.

## Cambios
- Paneles más transparentes para resaltar el fondo sin cambiar su encuadre.
- Pegar imágenes desde el portapapeles con Ctrl+V. La imagen solo se adjunta; no se procesa hasta escribir una instrucción y enviarla.
- Investigación con formato limpio: numeración 1., 2., 3. y puntuación normal, sin asteriscos decorativos.
- Exportación real y descargable a Word (.docx), Excel (.xlsx), PDF (.pdf) y PowerPoint (.pptx).
- Si el usuario dice “ahora pásamelo a Word/Excel/PDF/PowerPoint”, usa el último resultado de la conversación.
- Si pide contenido y formato en la misma instrucción, primero genera el contenido y luego crea el archivo.

## Render
No contiene claves. Mantener OPENAI_API_KEY y OPENAI_MODEL en Environment de Render. `npm install` instalará las dependencias nuevas automáticamente.
