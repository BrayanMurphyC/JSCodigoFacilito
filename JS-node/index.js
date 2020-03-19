// CALLBACKS
// const request = require('request'); //Importamos la libreria
// request('https://www.google.com/',function(){ //solicitud a google y segundo argumento pasamos un callback, el callback es solo una funcion, cuando termine de cargar google js sabe que debe dejar un mensaje que temrino y ejecutar el segundo argumento la funcion anonima que enviamos como argumento
//     console.log('termine la petición de cargar google');  
// });
//  console.log('Yo voy después en el código de la petición a Google')


//PROMESAS - tabm contiene promesas
const rp = require('request-promise');
//promise-es un tipo de objeto con el metodo then
rp('https://www.google.com/')
.then(function (htnl) {    //metodo
    console.log('termine la peticion de google');    
}).catch(function (err) {  //se ejecuta si la promesa falla
    console.log(err);
    
})