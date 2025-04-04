// Activity 2. Array Methods Practice

// Use concat() to join two arrays
let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let combinedArr = arr1.concat(arr2);
console.log("Concatenated Array:", combinedArr);

// Use push() to add "Kiwi" to the fruits array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("Fruits after push:", fruits);

// Use unshift() to add 4 and 5 to the beginning of array1
let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log("Array1 after unshift:", array1);

// Use pop() to remove the last element from the fruits array
fruits.pop();
console.log("Fruits after pop:", fruits);

// Use shift() to remove the first element from array2
let array2 = [1, 2, 3];
array2.shift();
console.log("Array2 after shift:", array2);

// Use sort() to sort the fruits array alphabetically
fruits.sort();
console.log("Sorted Fruits:", fruits);

// Use slice() to create a new array containing a portion of the fruits array
let slicedFruits = fruits.slice(1, 3); 
console.log("Sliced Fruits:", slicedFruits);

//  Use splice() to insert and remove elements in the months array
let months = ["January", "February", "March", "May"];
months.splice(3, 0, "April"); 
console.log("Months after splice (insert):", months);

months.splice(2, 1);
console.log("Months after splice (remove):", months);