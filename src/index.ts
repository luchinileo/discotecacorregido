let personas: numero[] = new Array(270);
let edadMinima: numero = 18;
let edadMaxima: numero = 40;

//function esMayorQue21(numero) {
//if (numero >21){
//  console.log(numero + "es mayor que 21.");
let cantidadMenores21: number = 0;
let cantidadMayores21: number = 0;

// }
//}
for (let indice = 0; indice < 270; indice++) {
  let numeroAleatorio = Math.floor(
    Math.random() * (edadMaxima - edadMinima) + edadMinima
  );
  personas[indice] = numeroAleatorio;
}
for (let indice = 0; indice < 270; indice++) {
  let edad = personas[indice];
  if (edad > 21) {
    cantidadMayores21 = cantidadMayores21 + 1;
  } else {
    // console.log(numero+ "no es mayor que 21.");
    cantidadMenores21 = cantidadMenores21 + 1;
  }
}
console.log("Personas mayores a 21", cantidadMayores21);
console.log("Personas menores 21", cantidadMenores21);
console.log("Total de personas ", personas.length);
