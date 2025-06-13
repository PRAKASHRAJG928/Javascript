
// IIfe function

// (function(){
//     console.log("hiii")
// })()



// string

//  1=>
//  let str ="hiiii"
//  console.log(str)


//  2=>
//  let str ='hiiii'
//  console.log(str)

//  3=>
//  let str =`hiiii`
//  console.log(str)

//  4=>
//  let str =string("hiiii")
//  console.log(str)




// string methods
// let str ="Javascript"
// console.log(str.at(4))
// console.log(str.charAt(4))
// console.log(str.charCodeAt(4))
// console.log([4]);


// extracting string parts
// 1. slice()
// 2. substring()


// let str = "i am prakash"
// console.log(str);
// console.log(str.length);
// let result = str.slice(6,10)
// console.log(result);
// console.log(str.slice(0));
// console.log(str.slice(-12));



// let str = "cuteBoy"
// console.log(str);
// console.log(str.slice(-7,-3));
// console.log(str.substring(-6,3));
// console.log(str.slice(-2,3));



//! Javascript string contact()
// ? contact() joins two or more strings:
// let str = "hello"
// let str1 = "World"
// console.log(str.concat(str1));
// console.log(str+ " "+str1);

// ! Replacing string content
// ? The replace() method replaces a specified value with another value in a string.
// ~ example 1
// let str = " Please visit Microsoft!"
// console.log(str.replace("Microsoft","Jspider"));
// console.log(str);

// ~ example 2   i 
// let str = "Please visit Microsoft!"
// console.log(str.replace(/microsoft/i,"Jspider"));

// ~ example 3 g globle 
// let str = "Please visit Microsoft! Please visit Microsoft! Please visit Microsoft!"
// console.log(str.replace(/Microsoft/g,"Jspider"));

// ! Javascript string indexof()
//  ? the method returns the index value its value not found returns -1
// ~ example 1   indexof() 
// let str = "Please visit Microsoft!"
// console.log(str.indexOf("Microsoft"));

// ~ example 2   indexof() -1 returns
// let str = "Please visit Microsoft!"
// console.log(str.indexOf("Microsoftcvbn"));

// ! lastindexof()
// ? the method returns the last index value its value not found returns -1
// ~ example 1   lastindexof() 
// let str = "Please visit Microsoft!Please visit Microsoft!Please visit Microsoft!"
// console.log(str.lastIndexOf("Microsoft"));

// ~ example 2   lastindexof() 
// let str = "Please visit Microsoft!Please visit Microsoft!Please visit Microsoft!"
// console.log(str.lastIndexOf("Microsoftdfghj"));

// ~ example 1   search() 
// let str = "Please visit Microsoft!Please visit Microsoft!Please visit Microsoft!"
// console.log(str.search("visit"));

// ! Javascript String includes()
// ~ example 1   includes() the methods return true
// let str = "Please visit Microsoft!Please visit Microsoft!Please visit Microsoft!"
// console.log(str.includes("visit"));

// ~ example 2  includes() the methods return true
let str = "Please visit Microsoft!Please visit Microsoft!Please visit Microsoft!"
console.log(str.includes("visitnbv"));



