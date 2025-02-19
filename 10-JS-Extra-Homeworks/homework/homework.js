// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = Object.entries(objeto);
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const veces = {};
  var suma=0;
  var array = Array.from(string);
  for(var i =0; i<array.length; i++){
    for(var j=0; j<array.length; j++){
      if(array[i]===array[j]){
        suma++;
        veces[array[i]]=suma;
      }
    }
    suma=0;
  }
  return veces;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var cambiada="";
  for(var i=0; i<s.length;i++){
    if(s.charAt(i).toUpperCase()===s.charAt(i)){
      cambiada = cambiada.concat(s.charAt(i))
    }
  }
  for(var i=0; i<s.length;i++){
    if(s.charAt(i).toLowerCase()===s.charAt(i)){
      cambiada = cambiada.concat(s.charAt(i))
    }
  }
  return cambiada;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var separada = str.split(" ")
  //var invertir = separada.reverse();
  //var aux = invertir.reverse();
  var invertir = [];
  var unir = invertir.join("");
  var aux = "";
  for(var i=0; i<separada.length; i++){
    for(var j=separada[i].length-1; j>=0; j--){
      aux = aux + separada[i].charAt(j);
    }
    if(i!=separada.length-1){
      aux=aux + " ";
    }
  }
  /*for(var i=unir.length-1; i>=0; i--){
    aux = aux + unir.charAt(i);
  }*/
  return aux;
  //return str.split("").reverse().join("");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  //var num1 = numero.toString();
  var num2 = numero.toString();
  var array = Array.from(num2);
  //var numIni = Array.from(num1);
  var array2 = [];

  for(i=0; i<array.length; i++){
    array2.unshift(array[i]);
  }
  var a = array.toString();
  var b = array2.toString();
  if(a===b){
    return "Es capicua";
  }
  else{
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var array = Array.from(cadena);
  var sinletras = [];
  var final = "";
  for(var i=0; i<array.length; i++){
    if(array[i]==="a" || array[i]==="b"|| array[i]==="c"){
      continue;
    }
    else{
      sinletras.push(array[i]);
    }
  }
  for(var i=0; i<sinletras.length; i++){
    final = final.concat(sinletras[i]);
  }
  return final;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  for(var j=0; j<arr.length; j++){
    for(var i=j+1; i<arr.length; i++){
      var tmp="";
      if(arr[j].length>arr[i].length){
        tmp=arr[j]
        arr[j]=arr[i];
        arr[i]=tmp;    
      }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var arreglo3 = [];
  for(var i=0; i<arreglo1.length; i++){
    for(var j=0; j<arreglo2.length; j++){
      if(arreglo1[i]===arreglo2[j]){
        arreglo3.push(arreglo1[i]);
      }
    }
  }
  return arreglo3;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

