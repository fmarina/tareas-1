function VistaNuevasTareas(modelo, controlador){
    this.modelo = modelo;
    this.controlador = controlador;
    var context = this;
    this.modelo.tareaAgregada.suscribir(function(){ 
        context.agregarNuevaTarea();
    });
}

VistaNuevasTareas.prototype = {
    inicializar: function(){
        console.log("Iniciada nueva tarea");
        this.agregarNuevaTarea();
    },
    agregarNuevaTarea: function(){
        var form = document.getElementById('formulario-agregar');
        var context = this;
        if(form){
            form.addEventListener('submit', function(){
                event.preventDefault();
                var descripcion = document.getElementById('descripcion').value;
                var radio = document.querySelector('input[name="prioridad"]:checked').value;
                context.controlador.agregarNuevaTarea(descripcion, radio);//paso 1
            });
        }        
    }
}