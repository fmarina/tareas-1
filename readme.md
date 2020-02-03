# Patrones de diseño.

## Descripción del proyecto

Vamos a realizar una aplicación para el seguimiento de nuestras tareas. Nuestra aplicación deberá poder:
- Agregar nuevas tareas.
- Establecer la prioridad de la tarea.
- Marcar como realizadas una tarea.
- Eliminar una tarea.
- Editar el texto de una tarea.

Tendremos 3 vistas:
1. Index: que nos llevará a las dos vistas principales:
2. Agregar tareas: tendrá un formulario para agregar la tarea, deberemos poder indicar el texto de la tarea, y la prioridad. Cuando agregemos una tarea se deberá mostrar en la lista de tareas de manera dinámica.
3. Vista tareas, tendremos la lista de todas nuestras tareas, que podremos eliminar, editar, o marcar como realizadas.

Para lograr nuestros objetivos deberemos hacer uso de dos patrones de diseño de Javascript:
- Patrón *MVC*
- Patrón *Observador*

Recursos:

1. Descargaremos los archivos html con la estructura mínima y el css. 
2. Debemos realizar todo nuestro código en javascript.