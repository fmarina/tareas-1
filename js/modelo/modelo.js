function Modelo(){
  this.tareas= localStorage.getItem("tareas") 
    ? JSON.parse(localStorage.getItem('tareas')) 
    : [];
    console.log("desde modelo", this.tareas);
    this.tareaAgregada = new Evento(this);
    this.cambioEstado = new Evento(this);       
}

Modelo.prototype = {
  agregarNuevaTarea: function(descripcion, radio){ 
    var nuevaTarea = {
      textoTarea: descripcion,
      id: 4,
      prioridad: radio,
      habilitado: 'habilitado'
    };
    this.tareas.push(nuevaTarea); 
    this.guardar();    
    this.tareaAgregada.notificar();
  },
  cambiarEstadoDeTarea: function(id){
    var tareas = this.tareas;
    tareas = tareas.map(function(tarea){
      if(tarea.id == id){
        tarea.habilitado = 'deshabilitado';
      }
    });
    this.tareas = tareas;
    var context = this;
    setTimeout(function(){
      context.cambioEstado.notificar();
    }, 2000);    
  },
  guardar: function(){
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
    console.log("Tarea guardada con exito");
  }
}

