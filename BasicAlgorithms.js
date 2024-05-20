/*Convert Celsius to Fahrenheit
The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit. */

function convertCtoF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

convertCtoF(30);

/*Reverse a String
Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh". */

function reverseString(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
  }
  return reverse;
}
console.log(reverseString("hello"));

/*Factorialize a Number
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function. */

function factorialize(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

console.log(factorialize(5));

let palabras = "Oh brave new world that has such people in it.";

/*Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number. */
function findLongestWordLength(str) {
  let palabras = str.split(" ");
  let mayor = palabras[0];
  for (let i = 0; i < palabras.length; i++) {
    if (mayor.length < palabras[i].length) {
      mayor = palabras[i];
    }
  }

  return mayor.length;
}
//console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

/*Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i]. */
function largestOfFour(arr) {
  let nuevoArray = [];

  for (let i = 0; i < arr.length; i++) {
    let numMax = Math.max(...arr[i]);
    nuevoArray.push(numMax);
  }

  return nuevoArray;
}
console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

let palabra = "barbara";
let nuevoArr = palabra.split("");
let ultimaLetra = nuevoArr.pop();
// console.log(ultimaLetra);

/*Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

 */
function confirmEnding(str, target) {
  let separar = str.split("");
  let ultimaLetra = separar.pop();
  if (ultimaLetra === target) {
    return true;
  } else {
    return false;
  }
}
// console.log(confirmEnding("Bastian", "n"));

let cadena = "hola mundo";
let ult = "mundo";
let tamano = ult.length;
//console.log(cadena.slice(tamano));

function confirmEnding(str, target) {
  let tamanoTarget = target.length;
  let frase = str.slice(-tamanoTarget);
  if (target === frase) {
    return true;
  } else {
    return false;
  }
}
//console.log(confirmEnding("Bastian", "n"));

/*Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method. */
function repeatStringNumTimes(str, num) {
  let repeticion = "";
  if (num < 0) {
    return "";
  } else {
    for (let i = num - 1; i >= 0; i--) {
      repeticion = repeticion + str;
    }
    return repeticion;
  }
}
//console.log(repeatStringNumTimes("abc", -3));

let palabra2 = "holass soy yo, te acuerdas de mi";
let resultado = palabra2.slice(0, 5);
//console.log(resultado);

/*Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending. */
function truncateString(str, num) {
  let resultado = "";
  if (str.length > num) {
    resultado = str.slice(0, num) + "...";
  } else if (str.length === num) {
    return str;
  } else {
    return str;
  }
  return resultado;
}

//console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));

/**Finders Keepers
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined. */
function findElement(arr, func) {
  let num;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (func(arr[i])) {
      num = arr[i];
    }
  }
  return num;
}
console.log(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  })
);

let abc = ["hola", "Como", "estas"];
let dividir = "hola soy maureen";
// console.log(dividir.charAt(0).toUpperCase() + dividir.slice(1));
//console.log(dividir.split(" "));
//console.log(abc.join(' '));

/*Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of. */
function titleCase(str) {
  let fraseMayuscula = [];

  let dividida = str.toLowerCase().split(" ");
  for (let i = 0; i < dividida.length; i++) {
    fraseMayuscula.push(dividida[i][0].toUpperCase() + dividida[i].slice(1));
  }
  return fraseMayuscula.join(" ");
}
//console.log(titleCase("I'm a little tEA pot"));

/*Slice and Splice
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs. */
function frankenSplice(arr1, arr2, n) {
  let nuevoArr = arr2.slice();
  nuevoArr.splice(n, 0, ...arr1);
  return nuevoArr;
}
//console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

/*Falsy Bouncer
Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean. */
function bouncer(arr) {
  let nuevoArr = arr.slice();
  let resultado = [];

  for (let i = 0; i < nuevoArr.length; i++) {
    if (nuevoArr[i]) {
      resultado.push(nuevoArr[i]);
    }
  }

  return resultado;
}

// console.log(bouncer([null, NaN, 1, 2, undefined]));

/*Where do I Belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1). */
function getIndexToIns(arr, num) {
  let item = 0;
  arr.push(num);
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
  item = arr.indexOf(num);
  console.log(item);
}

//  getIndexToIns([2, 5, 10], 15);

let num = [5, 110, 203, 250, 35];
//console.log(num.sort(function(a,b){return a - b}));

let arr = ["hello", "hey"];
let p1 = arr[0].split("");
let p2 = arr[1].split("");
//console.log(p1);

/*Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien. */
function mutation(arr) {
  let p1 = arr[0].toLowerCase();
  let p2 = arr[1].toLowerCase();

  for (let i = 0; i < p2.length; i++) {
    if (p1.indexOf(p2[i]) < 0) {
      return false;
    }
  }
  return true;
}
//console.log(mutation(["hello", "he"]));

/*Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

 */
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  //console.log(newArr);
}

//  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
