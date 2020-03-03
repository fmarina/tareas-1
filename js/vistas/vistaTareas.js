function VistaTareas(modelo, controlador){
    this.modelo = modelo;
    this.controlador = controlador;
    this.tareas = this.modelo.tareas;
    var context = this;
    this.modelo.tareaAgregada.suscribir(function(){
        context.listarTareas();
    });
    this.modelo.cambioEstado.suscribir(function(){
        context.listarTareas();
    });
}

VistaTareas.prototype = {
    inicializar: function(){
        console.log("Iniciada vista tarea");
        this.listarTareas();
        this.cambiarEstadoDeTarea();
    },
    listarTareas : function(){
        var ul = document.querySelector(".lista-tareas");
        ul.innerHTML = "";
        this.tareas.forEach(tarea => {
            if(tarea.habilitado !== "deshabilitado"){
                var li = document.createElement("li");
                li.textContent = tarea.textoTarea;
                li.setAttribute("id", tarea.id);
                ul.append(li);  
            }                      
        });
    },
    cambiarEstadoDeTarea: function(){
        var context = this;
        var tareaSeleccionada = document.querySelector(".lista-tareas");
        tareaSeleccionada.addEventListener('click', function(){
            if(event.target.nodeName === "LI"){
                var selected = event.target;
                selected.classList.add('disabled');
                context.controlador.cambiarEstadoDeTarea(selected.id);
            }
        });
    }

}


