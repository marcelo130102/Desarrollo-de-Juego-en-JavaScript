# Conceptos de los videos tomados como guía

Dentro de este Markdown se escribirá los conceptos adquiridos en los video y que se necesiten al momento de explicar en el README.

## Contenido
* [Video 6](#video-6)
* [Video 7](#video-7)


# Video 6

## DOM
Documento Object Model, es creado cuando se carga la página. Se puede utilizar para usar scripts cuando se termina de cargar la página.

# Video 7

## Creación de namespace
```js
var algo = {};
```

Dentro de la creación del bucle principal, se insertan los primerios atributos y funciones.

Por ejemplo, lo primero que se desarrolló es:
```js
var buclePrincipal = {
    idEjecución: null,
    ultimoRegistro: 0,
    aps: 0,
    fps: 0,

    iterar: function(registroTemporal){
        buclePrincipal.idEjecución = window.requestAnimationFrame(buclePrincipal.iterar);
    },

    detener: function(){

    },

    actualizar: function(registroTemporal){

    },

    dibujar: function(registroTemporal){

    }
};
```
> Explicando el código

```js
 buclePrincipal.idEjecución = window.requestAnimationFrame(buclePrincipal.iterar);
```
Al momento de llamara a la función `window.requestAnimatioFrame();` permite que nuestro código se ejecute después de que se realice todas las operaciones dentro de la ventana, tomando los FPS de la misma para nuestras ejecuciones.

## CallBack
Podemos incluir una función dentro de otra, para que al final de su ejecución se incie la otra.
>Ejemplo
```js
iterar: function(registroTemporal){
    buclePrincipal.idEjecución = window.requestAnimationFrame(buclePrincipal.iterar);
},
```

# Video 8
Actualizamos el namespace del buclePrincipal, por lo que tenemos nuevas funciones:
> Código
```js
var buclePrincipal = {
    idEjecución: null,
    ultimoRegistro: 0,
    aps: 0,
    fps: 0,

    iterar: function(registroTemporal){
        buclePrincipal.idEjecución = window.requestAnimationFrame(buclePrincipal.iterar);

        buclePrincipal.actualizar(registroTemporal);
        buclePrincipal.dibujar();

        if(registroTemporal - buclePrincipal.ultimoRegistro > 999) {
            buclePrincipal.ultimoRegistro = registroTemporal;
            console.log("APS: " + buclePrincipal.aps + " | FPS: " + buclePrincipal.fps);
            buclePrincipal.aps = 0;
            buclePrincipal.fps = 0;
        }
    },

    detener: function(){

    },

    actualizar: function(registroTemporal){
        buclePrincipal.aps++;
    },

    dibujar: function(registroTemporal){
        buclePrincipal.fps++;
    }
};
```

## Explicando el código
El `registroTemporal` es un número obtenido de la función del window, al momento de hacer las actualizaciones, por lo que sería un número con el cual se puede calcular los APS y FPS.

Por lo que luego de realizar la actualización de la página, ejecutamos las otras dos funciones.
```js
buclePrincipal.actualizar(registroTemporal);

buclePrincipal.dibujar();
```

Dentro de cada uno se adiciona los APS y FPS.

>Bucle condicional

Para el `if` de la función iterar, encontramos un condicional:
```js
if(registroTemporal - buclePrincipal.ultimoRegistro > 999) {
    buclePrincipal.ultimoRegistro = registroTemporal;
    console.log("APS: " + buclePrincipal.aps + " | FPS: " + buclePrincipal.fps);
    buclePrincipal.aps = 0;
    buclePrincipal.fps = 0;
}
```
Al tomar el registro temporal y restarlo con el último registro, obtendriamos el tiempo en milisegundos antes de cumplir una actualización, por lo que en el caso de que sea mayor a 999, la cantidad de APS y FPS va a tener un número acumulado, por ende si se hace una actualización, se reinicia el contador a cero.