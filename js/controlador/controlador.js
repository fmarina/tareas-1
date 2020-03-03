function Controlador(modelo){
    this.modelo = modelo;
}

Controlador.prototype = {
    agregarNuevaTarea: function(descripcion, radio){
        this.modelo.agregarNuevaTarea(descripcion, radio);
    },
    cambiarEstadoDeTarea: function(id){
        this.modelo.cambiarEstadoDeTarea(id);
    }
};