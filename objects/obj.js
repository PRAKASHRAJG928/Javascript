// ! objects literals.

let student = {
    name:"xyz",
    age:23,
    city:"blr",
    printdetails:function(){
    console.log(this.name,this.age,this.city)
}
}
console.log(student.printdetails)
// student.printdetails()

console.log(student);
console.log(student.name);
console.log(student["city"]) // another way of call.
student.age=25;
console.log(student.age)
student["city"]="Madurai" // another way of update.
console.log(student["city"])

delete student.age;
console.log(student);

// ! using delete operator we can dlte only properties of objects not the variables.

let a = 10;
delete a;
console.log(a)

// ! constructor object.

let student3=new Object()
student3.name="prakash"
student3.age =25
console.log(student3)

// ! using constructor function.
// ? a function which is use to create an object.
// ? this keyword is binding to the property function name to objects.

function Person(name,age,city){
    this.name=name;
    this.age=age;
    this.city=city;
}
let p1 = new Person("xyz",25,"blr")
let p2 = new Person("abc",30,"blr")
console.log(p1)
console.log(p1.name)

// ! nested object.

let student1 = {
    name:"xyz",
    age:23,
    address: {
        city:"blr",
        state:"karnataka",
    }
}
console.log(student1.address.state);

// ! Method of Object. it is static method,Object.assign()
// ? this method is used to assign the properties from different source object to the target object this method will return the reference of the source objects.

let emp2={
    name:"prakash",
    age:22
}
let address1 = {
    city:"Madurai",
    pincode:625012
}
let dept = {
    id : 101,
    deptname: "Mca"
}

Object.assign(emp2,address1,dept);
console.log(emp2)

// ! Object.freeze. only for reading this method
// ! it will return the reference of the same objects,it is static method,

let emp3 ={ 
    id : 101,
    deptname: "Mca",
    sname:"prakash",
    age:22
}
Object.freeze(emp3)
console.log(emp3.age)
emp3.age=21;
console.log(emp3.age)

// ! Object.isFreeze. its will check the object is freeze or not,it is static method,

console.log(Object.isFrozen(emp3))

// ! Object.seal.  its only read the object and update the objects not add and not delete.
// ! it will return the reference of the same objects

let emp4 ={ 
    id : 101,
    deptname: "Mca",
    sname:"prakash",
    age:22
}
Object.seal(emp4)
emp4.age=21;
console.log(emp4.age)

// ! Object.isSealed. its will check the object is seal or not 
console.log(Object.isSealed(emp4))

// ! hasOwnProperty. it is non static method,  it will check if the key is inside the object is there or not and return true or false.
console.log(emp4.hasOwnProperty("id"))

// ! Object.keys. it is non static method,it will return the array.
console.log(Object.keys(emp4));
// output: ['id', 'deptname', 'sname', 'age']

// ! Object.values. it is non static method,it will return the array.
console.log(Object.values(emp4));
// output: [101, 'Mca', 'prakash', 21]


// ! Object.entries it will return the array.
console.log(Object.entries(emp4));
// output: [Array(2), Array(2), Array(2), Array(2)] // in the array key and value.




// ! spread operator in objects
// ? in spread operator we combaining one objects to another object copy the key and values 
let student2 = {
    sname:"john",
    age:23,
    dept:"cse"
}
let emp = {
    sal:2000,
    city:"bangalore"
}
console.log(student2);
console.log(emp);
let emp1 ={...student2,emp}
// let emp2 = {emp,...student2}.
// console.log(emp2)
console.log(emp1);
console.log(student2);

// ! Object Destructing
// ? we extract the object into indivival values,key name must be variable name

// let student = {
//     sname:"john",
//     age:23,
//     dept:"cse"
// }
// let{age,dept,sname}=student;
// console.log(age,dept,sname);

// ! rest parameter in objects
// ? in rest key and values stored in after 

// let student = {
//     sname:"john",
//     age:23,
//     dept:"cse",
//     gender:"male",
//     marks:91
// }
// let{ sname,age,...after}=student;
// console.log(after);



