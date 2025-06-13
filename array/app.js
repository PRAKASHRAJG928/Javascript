// ! array is a huge block of memory which can store both homogeneous and hetrogeneous type of data.
// ! array is dynamic.array is an object.to access the size of the array you can use length properties.
// ? homogeneous same type of data 
// let array = [10,20,30,40,50]
// console.log(array);

// ? hetrogeneous different type of data stored in array bigint as function it consider
// let array = [10,'string',true,BigInt,null,undefined,[]]
// console.log(array);

// ?there are three ways create an array
// !1. array literals

let array1 = [10,20,30,40,50]
console.log(array1);                      //(5) [10, 20, 30, 40, 50]

// ! 2. array construstor.

// let arr = new Array(4).fill(10)
// console.log(arr)                        //(4) [10, 10, 10, 10]
// console.log(arr.length)
// console.log(arr[arr.length-1])          // last index.

// let array = new Array( 12 , 10 )
// console.log(array);

// 3. array 0f()
// let array = Array.of(10)
// console.log(array);

// ! Array Methods.
// ?1. push() it will change the original array & it will add the new element end of the array

let array2 = [10,20,30,40,50]
console.log(array2);                //(5) [10, 20, 30, 40, 50]
let res = array2.push(60,70)
console.log(res);                   // 7
console.log(array2);                // (7) [10, 20, 30, 40, 50, 60, 70]

// ?2. pop() it will change the original array & it will remove the element end of the array and return the removed value only one item will be pop

// let array = [10,20,30,40,50]
// console.log(array);
// let res = array.pop()
// console.log(res);
// console.log(array);

// ?3. unshift() it will change the original array & it will add the new element first of the array

// let array = [10,20,30,40,50]
// console.log(array);
// let res = array.unshift(60,70)
// console.log(res);
// console.log(array);

// ?4. shift() it will change the original array & it will remove the first element of the array & the return value is removed item

// let array = [10,20,30,40,50]
// console.log(array);
// let res = array.shift()
// console.log(res);
// console.log(array);

// ? slice().it will not affect the original array.

// let array = [10,20,30,40,50]
// console.log(array);
// let res = array.slice(0,3)
// console.log(res);
// console.log(array);


// ? splice().it will affect the original array.
 let array = [10,20,30,40,50]
 array.splice(1,2,70)
 console.log(array)            //(4) [10, 70, 40, 50]

//? join()  join the element of the array based on the sperator this method retutn new string(array to string)
 let result = array.join()
console.log(result)          //10,70,40,50

let result1 = array.join(" ")
console.log(result1)        //10 70 40 50



// ? split().

let str = "abcd"
let result2 = str.split("");
console.log(result2)                     // (4) ['a', 'b', 'c', 'd']

// ? reverse().

result2.reverse()
console.log(result2)                     // (4) ['d', 'c', 'b', 'a']


let res2 = str.split("").reverse().join("")
console.log(res2)                       // dcba




let str2 ="atmethod"
console.log(str2.at(4));

let str3 ="char at method"
console.log(str3.at(3));




