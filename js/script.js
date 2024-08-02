// Escribir una funcion llamada "verificarNumero" que reciba 1
// parametro (nümero). El valor de retorno serå un string que
// indique si el nümero es positivo, negativo o 0.


function verificarNumero(numeroA){
    if(numeroA > 0){
        return("El numero " + numeroA + " es positivo");
    }else if(numeroA < 0){
        return("El numero " + numeroA + " es negativo");
    }else{
        return("El numero es cero");
    }
};


console.log(verificarNumero(0));
console.log(verificarNumero(-5));
console.log(verificarNumero(10));
console.log(verificarNumero(1));


// Escribir una funcion llamada "esMayorQue" que reciba 2
// parámetros (números). EI valor de retorno será un string que
// indique si eI primer número es mayor al segundo o no.

 function esMayorQue(numero1, numero2 ){
     if(numero1 > numero2){
         return("El numero " + numero1 + " es mayor que el numero " + numero2);
     }else if(numero1 < numero2){
         return("El numero " + numero1 + " es menor que el numero " + numero2)
     }else{
         return("El numero " + numero1 + " y el numero " + numero2 + " Son Iguales")
     }
 };

 console.log(esMayorQue(2,4));
 console.log(esMayorQue(4,2));
 console.log(esMayorQue(4,4));


//  Escribir una funcion llamada "existeEnLaLista" que reciba 2
//  paråmetros (un string/nümero y un array). El valor de retorno
//  serå un booleano que indique si este string/nümero existe
//  dentro del array.

 var listaDeFrutas = ["manzana","naranja","fresa"];
 var listaDeNumeros = [1,2,3,4,5,6,7,8,9,10];


 function existeEnLaLista(elemento, lista){
     return lista.includes(elemento);
 }
 console.log(existeEnLaLista("pera",listaDeNumeros));
 console.log(existeEnLaLista(5,listaDeNumeros));


//  Escribir una funcion llamada "existeEnLaLista2" que reciba 2
// paråmetros (string/numero, y un array). El valor de retorno
// dependerå de que exista o no el string/numero dentro del array. Si
// existe, retorna true. Si no existe, Io incluye en la lista y retorna el
// array completo.

function existeEnLaLista2(elemento, lista){
    if (lista.includes(elemento)){
        return true;
    }else {
        lista.push(elemento);
        return lista;
    }
}

console.log(existeEnLaLista2("manzana",listaDeNumeros));
 console.log(existeEnLaLista2(5,listaDeNumeros));

//  Escribir una funciån llamada "obtenerLongitudSinEspacios" que
// reciba como argumento un string y devuelva la longitud de la
// cadena (string por completo) sin contar los espacios.

function obtenerLongitudSinEspacios(cadena){
    let obtenerLongitudSinEspacios = 0;
    
    for (let i = 0; i < cadena.length; i++){
        if (cadena[i] !==' '){
            obtenerLongitudSinEspacios++;
        }
    }
    return obtenerLongitudSinEspacios;
}

console.log(obtenerLongitudSinEspacios("Hola equipo!"));
console.log(obtenerLongitudSinEspacios("JavaScript"));
console.log(obtenerLongitudSinEspacios("H T M L"));
console.log(obtenerLongitudSinEspacios("C S S"));


// Escribir una funcion llamada "sumarNumeros" que reciba como
// argumento un nümero entero positivo y devuelva la suma de todos
// los nümeros desde 1 hasta ese mismo nümero.

function sumarNumeros(numero){
    let suma = 0;

    for (let i = 1; i <= numero; i++){
        suma += i;
    }
    return suma;
}

console.log(sumarNumeros(5));
console.log(sumarNumeros(3));
console.log(sumarNumeros(4));


// Escribir una funcion llamada "contarVocaIes" que reciba como
// argumento un string. El valor de retorno serå la cantidad de vocales
// (number) que contiene el string.

function contarVocales(palabra){
    let contador = 0;
    for (let i = 0; i < palabra.length; i++){
        let letra = palabra[i].toLowerCase();
        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o'|| letra === 'u'){
            contador++;
        }
    }
    return contador++;
}

console.log("La palabra Ad lorem ipsum tiene " + contarVocales("Ad lorem ipsum") + " vocales");
console.log("La palabra Ad lorem ipsum tiene " + contarVocales("JAVASCRIPT")+ " vocales");
console.log("La palabra Ad lorem ipsum tiene " + contarVocales("AABBCCaabbcc") + " vocales");
console.log( "La palabra Ad lorem ipsum tiene " + contarVocales("Bogotá Institute of Technology") + " vocales");


// Escribir una funciön llamada removerVocaIes que reciba como
// argumento un string y retorne un nuevo string que sea igual al
// recibido pero sin Ias vocales.

function removerVocales (palabra2){
  const vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let resultadoSinVocales = " ";
  for (let i = 0; i  < palabra2.length; i++){
    if (!vocales.includes(palabra2[i])){
        resultadoSinVocales += palabra2[i];
    }
  } 
  return resultadoSinVocales
}

console.log(removerVocales("Hola!"));
console.log(removerVocales("JavaScript"));
console.log(removerVocales("H T M L"));
console.log(removerVocales("C S S"));