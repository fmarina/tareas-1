# Patrones de diseño.
## Etapa 1 

Debemos crear los componentes que sean necesarios siguiendo el patrón *MVC*

1. Creamos las vistas. Tenemos 2 vistas que van a tener funcionalidades: vistaTareas y vistaNuevasTareas. Si bien ambas van a compartir algunos elementos, éstas vistas no tienen las mismas responsabilidades.
2. Creamos el controlador. Éste debe encargase de comunicarse con el modelo para notificarlo de los cambios que se producen las en las vistas, y a partir de ello, el modelo, modificará los "datos".
3. Creamos el modelo. Éste se encargará de almacenar, modificar, eliminar, y demás acciones relacionadas con los datos de nuestra aplicación.

## Vamos por partes.

#### La vista de VistaTareas y VistaNuevasTareas.

Sabemos que la VistaTareas es un objeto, creado con el patrón *constructor*.
- Creamos el objeto VistaTareas. ¿Qué otros componentes van a interactuar con esta vista?

*vista => controlador => modelo*

Para definir las funciones debemos pensar:
- ¿Qué responsabilidades tiene esta vista? ¿Qué funciones tiene que hacer? ¿Qué interacciones espera del usuario?

#### El controlador.

Sabemos que el Controlador es un objeto, creado con el patrón *constructor*.
- Creamos el objeto Controlador. ¿Qué otros componentes van a interactuar con este componente?
*vista => controlador => modelo*

Para definir las funciones debemos pensar:
- ¿Qué responsabilidades tiene el controlador? ¿Qué funciones debe hacer?

#### El modelo.

Sabemos que el Modelo es un objeto, creado con el patrón *constructor*.
- Creamos el objeto Modelo. ¿Qué otros componentes van a interactuar con este componente? ¿Necesita conocer de otros componentes?
*vista => controlador => modelo*

Para definir las funciones debemos pensar:
- ¿Qué responsabilidades tiene el modelo? ¿Qué debe hacer con los datos?

#### Archivo index.

Esta archivo tiene por función inicializar todas nuestras variables.
Creará un nuevo modelo y las nuevas vistas.
Utilizamos este archivo también para dividir tareas o responsabilidades. Éste archivo se encargará de llamar a todos los componentes que sean necesarios para que la aplicación funcione. Creando las instancias de cada uno.

### Mostrar tareas iniciales.

Cuando iniciamos nuestra aplicación tenemos tres tareas ya guardadas. Podemos verla en la consola.
Vamos intentar imprimirlas en la vista VistaTareas.

1. Primero debemos definir quién es el responsable de mostrar las tareas? la Vista o el Modelo?
2. De acuerdo a que componente te parezca que debe mostrar las tareas, debes crear un método que lo realice. ¿Cómo sería?
  - ¿Cómo podemos obtener los datos de tareas que están guardados en modelo?
  - ¿Cómo podemos crear el html que las muestre en la vista? ¿Qué elemento debemos crear? ¿Cómo se lo agregamos al DOM?
  - Podemos probar que nuestro método funciona desde la consola, si lo hemos hecho bien nos mostrará la lista en la vista. ¿Pero como hacemos para incialmente nos muestre la lista, apenas se carga la aplicación?
3. Qué pasó con la VistaNuevasTareas? también tiene la lista?