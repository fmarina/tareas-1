// en el archivo index vamos a inicializar nuesto modelo, y las vistas.

var modelo = new Modelo();
var controlador = new Controlador(modelo);

var vistaTareas = new VistaTareas(modelo, controlador);
vistaTareas.inicializar();

var vistaNuevaTareas = new VistaNuevasTareas(modelo, controlador);
vistaNuevaTareas.inicializar();

var vistaRealizada = new VistaRealizadas(modelo, controlador);
vistaRealizada.inicializar();

