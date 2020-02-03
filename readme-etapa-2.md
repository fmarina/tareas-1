# Patrones de diseño.
## Etapa 2

Vamos a implementar el patrón *observador*. 
Este patrón nos permite notificar desde el modelo los cambios que se han realizado a todas las vistas. Y éstas se actualizan en consecuencia.

## Evento.js

Esta clase tiene 2 propiedades:
- El sujeto que es el que notifica a los demás sobre los cambios que han sucedido.
- Los observadores, que son los que están pendientes de la llegada de estas notificaciones.

Además tiene 2 métodos:
- suscribir, que va a permitir a cada "vista" sumarse como observador.
- notificar, que permite enviar a cada suscriptor "observador" lo que ha sucedido.

Siguiendo lo visto en clase tenemos:

*vista => controlador => modelo*
Pero ahora podemos adicionar:
*modelo notifica a => todas las vistas*

Los cambios que realicemos van a disparar un evento, que están escuchando las vistas.

Vamos a crear el método agregarTareas en la VistaNuevasTareas, que provocará un cambio en la lista de tareas. 

1. Tenemos que escuchar el evento 'submit' del formulario. Recordar que cuando estemos trabajando en el evento se cambia el valor de this, por lo que tendremos que guardarlo en una variable.
2. Debemos obtener el valor del input, y el valor del checkbox seleccionado, guardamos estos valores en dos variables.
3. Una vez que tengamos los datos de la nueva tarea debemos avisarle al controlador que ha sucedido un cambio, ejecutar el método del controlador agregarTarea y pasarle los valores del texto de la tarea más la prioridad.

Esta parte es importante, pero ahora sí vamos a poder utilizar el patrón observador.

- En el modelo: debe procesar la información que recibe del controlador, y agregarla a las tareas.
- El modelo luego de agregar la tarea al array tareas debe notificar a todos los suscriptores.
- Para poder notificar es necesario que el modelo posea una propiedad que cree una instancia del evento (el objeto evento);
