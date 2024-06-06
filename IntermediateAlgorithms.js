/*Suma todos los números en un rango
Te pasaremos un arreglo de dos números. Devuelve la suma de estos dos números más la suma de todos los números entre ellos. El número más bajo no siempre será el primero.

Por ejemplo, sumAll([4,1])> debe devolver 10 porque la suma de todos los números entre 1 y 4 (ambos incluidos) es 10. */
function sumAll(arr) {
  let mayor = 0;
  let menor = 0;
  let suma = 0;
  if (arr[0] > arr[1]) {
    mayor = arr[0];
    menor = arr[1];
  } else {
    mayor = arr[1];
    menor = arr[0];
  }
  for (let i = menor; i <= mayor; i++) {
    suma = suma + i;
  }
  return suma;
}

//sumAll([1, 4]);

/**Diferencia entre dos arreglos
Compara dos arreglos y devuelve un nuevo arreglo con los elementos que sólo se encuentran en uno de los dos arreglos dados, pero no en ambos. En otras palabras, devuelve la diferencia simétrica de los dos arreglos.

**Nota:**Puedes devolver el arreglo con sus elementos en cualquier orden. */

function diffArray(arr1, arr2) {
  const newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) < 0) {
      newArr.push(arr1[i]);
      console.log(newArr);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) < 0) {
      newArr.push(arr2[i]);
      console.log(newArr);
    }
  }

  return newArr;
}

//diffArray([1, 2, 3, 5, 10], [1, 2, 3, 4, 5]);

/*Busca y destruye
Se te proporcionará un arreglo inicial como primer argumento de la función destroyer, seguido de uno o más argumentos. Elimina todos los elementos del arreglo inicial que tengan el mismo valor que estos argumentos.

La function debe aceptar un número indeterminado de argumentos, también conocida como función variádica. Puedes acceder a los argumentos adicionales añadiendo un parámetro restante a la definición de la función o utilizando el objeto arguments. */

function destroyer(arr, ...others) {
  // Filtramos los elementos de 'arr' para excluir los que están en 'others'
  const resultado = arr.filter((item) => !others.includes(item));

  // Devolvemos el arreglo filtrado
  return resultado;
}

// Prueba de la función
//console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // Debería devolver [1, 1]

/*Donde estás
Crea una función que busque a través de un arreglo de objetos (primer argumento) y devuelva un arreglo de todos los objetos que tengan pares de nombre y valor coincidentes (segundo argumento). Cada par de nombre y valor del objeto fuente tiene que estar presente en el objeto de la colección si se va a incluir en el arreglo devuelto.

Por ejemplo, si el primer argumento es [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], y el segundo argumento es { last: "Capulet" }, entonces debes devolver el tercer objeto del arreglo (el primer argumento), porque contiene el nombre y su valor, el cual fue pasado como segundo argumento. */

const objeto ={
  name: 'pedro',
  age: 8,
  padre: 'juan'
}

for(const item in objeto){
  console.log(item +' ' + objeto[item])
}
