/* Palindromo
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome. */
const num = 121;

function palindromo(num){
    const numReverse = num.toString().split('').reverse().join(''); 
    if(num === parseInt(numReverse)){
        return true;
    }else{
      return false;  
    }
    
}
//console.log(palindromo(num));

/*Retornar la suma de los pares */

const numeros = [1, 2, 3, 4, 5, 6, 50];
let suma = 0;
function sumaPares(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            suma = suma + array[i];
        }
    }
    return suma
}
//console.log(sumaPares(numeros))

/*Retornar la suma de los pares */

const numerosArray = [1, 2, 3, 4, 5, 6, 50];

function sumaPares2(array){
    const resultado = array.reduce((suma, num) => {
        if(num % 2 === 0){
            return suma + num;
        }else{
            return suma
        }
    },0)
    return resultado;
}
//console.log(sumaPares2(numerosArray));

/*Desafío
Escriba una función llamada count_occurrences, que tome una lista de enteros. La función debe devolver el recuento de cuántas veces aparece cada número en la lista.

Ejemplo:
Entrada: [1, 2, 3, 4, 4, 2, 4]
Salida: 1(1) 2(2) 3(1) 4(3)

Ejemplo:
Entrada: [5, 5, 5, 5]
Salida: 5 (4)

La lista de entrada puede contener enteros positivos y negativos */

let nums = [1, 2, 3, 4, 4, 2, 4];

function countOccurrences(array){
    let suma = {};
    for(let i = 0; i < array.length; i++){
        if(suma[array[i]] !== undefined){
            suma[array[i]] += 1;
        }else{
            suma[array[i]] = 1;
        }
    }
    return suma;

}
//console.log(countOccurrences(nums));

// Escribe una función que invierta una cadena de texto.
let saludo = 'Hola, soy Pedro';
function reverseString(str){
 const reverse = str.split('');
 let resultado = '';
    for(let i = reverse.length - 1; i >= 0; i--){
        resultado = resultado + reverse[i]
    }
 return resultado
}
//console.log(reverseString(saludo));

// Escribe una función que determine si una cadena de texto es un palíndromo.
let texto = 'anas'
function isPalindromo(str){
    const reverse = str.split('').reverse().join('');
    if(str === reverse){
        console.log('es palindromo');
    }else{
        console.log('no es palindromo');
    }
}
//isPalindromo(texto)
// Escribe una función que devuelva la suma de todos los números en un array.
function sumaNums(array){
    return array.reduce((suma, num) => {
        return suma + num;
    }, 0)
}
//console.log(sumaNums(numeros));
// Escribe una función que encuentre el número más grande en un array.
function numBig(arr){
    return Math.max(...arr)
}
//console.log(numBig(numeros));

//-----------------
function numBig2(arr){
    let big = 0;
    for(let i = 0; i < arr.length; i++){
        if(big < arr[i]){
            big = arr[i];
        }else{
            big;
        }
    }
    return big
}
//console.log(numBig2(numeros));

// Escribe una función que determine si dos cadenas de texto son anagramas.
let p1 = 'amor';
let p2 = 'ROMA';

function isAnagrama(str1, str2){
    let p1Reverse = str1.split('').reverse().join('');
    if(p1Reverse.toUpperCase() === str2.toUpperCase()){
        return 'es anagrama'
    }else{
        return 'no es anagrama'
    }
   
}
//console.log(isAnagrama(p1, p2));

// Escribe una función que elimine los elementos duplicados de un array.
let elementos = ['manzana', 'pera', 'mesa', 'arbol', 12, 200, 12, 'pera', 'mandarina'];

function repetido(array){
    return array.reduce((newArray, item) => {
        if(!newArray.includes(item)){
           newArray.push(item)
        }
            return newArray
                  
    },[]);
  
}
//console.log(repetido(elementos));

// Escribe una función que devuelva los números de Fibonacci hasta un número dado.
// Escribe una función que encuentre el segundo número más grande en un array.

let arrayNumeros = [12, 30, 50, 10, 5, 0, 90, 100, 200, 500];
function segundoMasGrande(array){
    let numberMax = Math.max(...array)
    const filtrado = array.filter((item) => {
        return item !== numberMax
    })
    let numberSecondMax = Math.max(... filtrado)
    
    return numberSecondMax;
    
}
//console.log(segundoMasGrande(arrayNumeros));

//for in y for on

for(let valor of arrayNumeros){
    //console.log(valor);
}
console.log('--------------');
for(let i in arrayNumeros){
    //console.log(arrayNumeros[i]);
}

// Escribe una función que verifique si una cadena contiene solo caracteres únicos.

let cadena = 'holaSy!'
function filtroCaracteres(str){
    const caracteres = [];
    for(let char of str){
        if(caracteres.includes(char)){
            return false
        }else{
            caracteres.push(char);
        }
    }
    return true;
}
//console.log(filtroCaracteres(cadena));

// Escribe una función que ordene un array de números en orden ascendente.
let numArr = [ 2, 1 , 0, 9]
function arrayAscendente(array){
    const orden = array.sort((a,b) =>  a - b)
    console.log(orden);
}
//arrayAscendente(numArr)

// Escribe una función que busque un número en un array ordenado usando búsqueda binaria.
// Escribe una función que cuente la cantidad de vocales en una cadena de texto.
let textoVocales = 'hola soy ana'
function contarVocales(str){
    let regex = /[aeiou]/gi;
    const vocales = str.match(regex);
    const totalVocales = vocales.length;
    return totalVocales;

}
contarVocales(textoVocales)
// Escribe una función que verifique si un número es primo.
let numero = 5;
function numPrimo (num){
   if(num <= 1){
    return false;
   }
   for(let i = 2; i <= Math.sqrt(num); i++){
    if(num % i === 0){
        return false
    }
   }
   return true
}
//console.log(numPrimo(numero));
// Escribe una función que devuelva el factorial de un número.

function esFactorial(num){
    let resultado = 1;
    for(let i = 1; i <= num; i++){
        resultado = resultado * i;
    }
    return resultado;
}
//console.log(esFactorial(numero));


// Escribe una función que combine dos arrays en uno solo y elimine los elementos duplicados.
let arr1 = [2, 10, 11, 15, 20, 1];
let arr2 = [2, 3, 4, 10, 5, 11];
function unirArray(array1, array2){
    const newArray = [];
    for(let i = 0; i < array1.length; i++){
        if(array2.indexOf(array1[i]) < 0){
            newArray.push(array1[i]);            
        }
    }
    for(let i = 0; i < array2.length; i++){
        if(array1.indexOf(array2[i]) < 0){
            newArray.push(array2[i])            
        }
    }
    return newArray
}
//console.log(unirArray(arr1, arr2));

// Escribe una función que determine si una cadena de texto tiene una combinación válida de paréntesis.

function parentesisEmparejados(str){
    let regulador = [];
    
    for(let char of str){
        if(char === '('){
            regulador.push(char);
        }else if(char === ')'){
            if(str.length === 0){
                return false
            }
            regulador.pop()
        }
    }

    return regulador.length === 0;
}
console.log(parentesisEmparejados('()()()'));

// Escribe una función que convierta un número romano a un número entero.
let numRomano = 'MXI'
function romanoAentero(romano){
    const romanos = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
      };

    let numero = 0;
    for(let i = 0; i < romano.length; i++){
        let numeroActual = romanos[romano[i]];
        let numeroSiguiente = romanos[romano[i+1]];

        if(numeroSiguiente && numeroSiguiente > numeroActual){
            numero = numero + (numeroSiguiente - numeroActual);
            i++;
        }else{
            numero = numero + numeroActual;
        }
    }
    return numero;
}
//console.log(romanoAentero(numRomano));
// Escribe una función que encuentre la subcadena más larga sin caracteres repetidos.
// Escribe una función que devuelva la intersección de dos arrays.
// Escribe una función que determine si un array está rotado (es decir, una parte está al final del array).