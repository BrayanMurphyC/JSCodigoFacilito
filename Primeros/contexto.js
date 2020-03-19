// primer caso Scope global
console.log(this)
/*hace referencia al scope global al objeto windows */


//Segundo Caso


// segundo caso Scope local
function demo (){
    console.log(this)
}



/* Tambien hace referencia al scope global*/



//Tercer caso
let miobjeto = {
    demo : function (){
        console.log(this)
    }
}



miobjeto.demo()



/*En este caso this hace referencia al objeto "miobjeto" */



//Cuarto Caso



let miobjeto ={
    demo:function(){
        console.log(this)
    }
}



let executor = {
    execute: function (f){
        f();
    }
}



executor.execute(miobjeto.demo)



/* el valor de this vuelve a cambiar al objeto global, debido que no hace
referencia al objeto que realmente la contiene que es miobjeto, esto se debe que el objeto que posee el codigo que se esta 
ejecutando es el objeto "executor" y no el objeto "miobjeto" 
(recordar que this hace referencia al objeto que posee el codigo que estamos ejecutando en ese momento)* entonces la funcion que pasamos por parametro,
tiene como objeto principal el scope global, como en el segundo caso function demo (){
    console.log(this)
} , solo que en este caso la funcion es anonima y no demo, por esa razon hace referencia e imprime el scope global windows
*/



// Quinto Caso



let miobjeto ={
    demo:function(){
        console.log(this)
    }
}



let executor = {
    funcion = null,
    execute: function (f){
        this.funcion = f;
        this.funcion();
    }
}



executor.execute(miobjeto.demo)



/* en este caso la funcion que se pasa por parametro a la funcion del objeto executor se guarda en una variable, con el fin de albergarla en el scope local
de manera que cuando llames this haga referencia al scope que existe en executor, y la funcion que llega como argumento ya no es una extranjera por decirlo asi
debido que esta contenida en la variable funcion, entonces ya no devuelve el scope global, sino que el scope que esta en executor, ojo el que esta en executor y no
el scope de miobjeto*/



/Cuando una funcion se ejecuta el valor de this es aquel del objeto que invoco la funcion 
no importa donde haya venido la funcion ni donde haya estado antes el contexto es el objeto que manda a llamar la funcion/



let miobjeto ={
    nombre: 'Miguel',
    segundoNombre: 'Angel',
    nombreCompleto:function(){
        console.log(this.nombre + ' ' + this.segundoNombre)
    }
}



let executor = {
    funcion = null,
    execute: function (f){
        this.funcion = f;
        this.funcion();
    }
}



executor.execute(miobjeto.nombreCompleto)



/* Se imprime por consola undefined undefined, debido que las variables
nombre y segundoNombre no existen en el objeto executor */

//Clases magistrales de Fernandita

const persona = {
    edad: 42,
    getEdad: function() {
      let edad =15
      return edad;
    },
  };
  
  function ejecutador(funcion){
    this.edad = 10
    return funcion()
  }
  
  //console.log(ejecutador(persona.getEdad))
  //console.log(persona.getEdad())
  //console.log(persona.getEdad)
  //console.log(persona.getEdad())
  //console.log(ejecutador(persona.getEdad))