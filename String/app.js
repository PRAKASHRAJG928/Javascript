// ! string are immuatable
// ? string literals

let str ="hello"
let str1='hello'
let str3=`hello`
console.log(str)

console.log(str[str.length-1])
console.log(str[3])

// ? String constructor

let str4= new String("hello");
console.log(str4);

let name = "prakash"
// ? `${java script experssion introduced Es6 features}` template literals  
console.log(`the name of the person ${name}`)


// ? includes() it will return true or false.

console.log(str1.includes("ll"))

// ? indexof()
console.log(str1.indexOf("ll"))    // 2

// ? replace()
console.log(str1.replace("l","c"))  // heclo

// ? replaceAll()
console.log(str1.replaceAll("l","c"))  // hecco

// ? typeof 
console.log(str==str4)
console.log(typeof(Object))
console.log(typeof(String))
console.log(typeof(Array))
console.log(typeof(null))
console.log(typeof(Number))
console.log(typeof(NaN))
console.log(typeof(Function))
console.log(typeof(undefined))
console.log(typeof(typeof(undefined)))







