document.addEventListener('DOMContentLoaded', function() {
    inicio.iniciarJuego();
}, false);
//DOM : Document Object Model

var inicio = {
    iniciarJuego: function(){
        console.log("Se cargó la página");
        buclePrincipal.iterar();
    }
};