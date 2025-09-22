// console.log(2>1);
// console.log(2>=1);//examples
console.log("2">1);//true
console.log("02">1);// true ayega js comvert karke compare karega
// === this is strict check isme bina convert ke check karega datatype v check hoga

console.log("2"===2);// false

console.log(null>0); // false
console.log(null== 0);// false
console.log(null>=0); // true why? the null is converted to zero by js

/* Key Point:

Comparisons (>, <, >=, <=) convert null to a number (0).

Equality (==) has special rules: null is only equal to undefined and nothing else.
*/

// === 
console.log("2" === 2);// triple equal changes the data type then check the condition

