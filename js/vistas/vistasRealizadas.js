function VistaRealizadas(controlador){
    this.tareas = controlador.obtenerListado();
    this.mostrarTareasRealizadas = function(){
        var tareasFiltradas = this.tareas.filter(tarea =>{
            return tarea.habilitado == "deshabilitado";
        });
        console.log(tareasFiltradas);
        return tareasFiltradas;
    };
    this.generarListado = function (tareas) {
        var ul = document.querySelector('.lista-tareas');
        ul.innerHTML = '';
        tareas.forEach(tarea => {
            var li = document.createElement('li');
            li.textContent = tarea.textoTarea;
            ul.append(li);
        });
    };
    this.inicializar = function(){
        this.generarListado(controlador.obtenerListado());
        var contexto = this;
        this.mostrarTareasRealizadas();
        this.generarListado(this.mostrarTareasRealizadas());
        // Agregue evento al form
        var form = document.getElementById('formulario-agregar');
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            var inputText = document.getElementById('descripcion').value;
            var radio = document.querySelector('input[name="prioridad"]:checked').value;
            controlador.agregarTarea(inputText, radio);
            contexto.generarListado(controlador.obtenerListado())
        });
    }
}


