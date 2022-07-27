// let dias= "lunes, martes, miércoles, jueves, viernes" 

// -Partiendo de la variable días, utilizando los métodos vistos en clase imprimir en consola:
// a): Longitud del string. 
// b): String en mayúsculas.
// c): Reemplazar TODAS las comas por guion medio.
// d): Mediante un método de los strings, devolver un array.  Cada elemento del array, debe ser un día de la semana.let mes1= ["enero", "febrero", "marzo", "abril", "mayo", "junio"] 
// let mes2= ["agosto", "septiembre", "octubre", "noviembre", "diciembre"] 
// a) Siempre utilizando métodos, devolver un array que contenga los 12 meses del año. 
// b) Utilizando mes1, devolver un array que contenga solo desde "febrero" hasta "abril", inclusive. 
// c) Utilizando mes1, devolver un array que contenga solo los meses que tienen mas de 4 letras en su nombre.
// -Aprovechando la función constructora "Zapatillas" desarrollada en el ejercicio anterior, crear un array de objetos que contenga las zapatillas que construimos anteriormente. (Si es necesario, puede copiar y pegar la función constructora y los objetos). 
// No crear el array de manera manual, hacerlo con las herramientas que nos provee JS (bucles, push, etc).

let dias = "lunes, martes, miércoles, jueves, viernes"
let mes1= ["enero", "febrero", "marzo", "abril", "mayo", "junio","julio"]
let mes2= ["agosto", "septiembre", "octubre", "noviembre", "diciembre"]

console.log(dias.length);
console.log(dias.toUpperCase());
console.log(dias.replace(/,/gi, "-"));
console.log(dias.split(","));
console.log(mes1.concat(mes2));
console.log(mes1.slice(1,4));
console.log(mes1.filter(mes => mes.length > 4));
