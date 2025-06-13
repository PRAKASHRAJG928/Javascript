// function hof(){
//     console.log("hi i am callback")
// }
// hof(callback())
// function callback(){
//     console.log("hiiiii")
// }


function Mathoperation(a,b,call,){
    // console.log("hiiiii")
    call(a,b)
    // console.log(a)

}
Mathoperation(20,30,function(x,y){
    console.log("math operation parameters")
    console.log(`Addition of ${x} and ${y}is : ${x+y}`)
    // console.log(x)
    

})
Mathoperation(20,30,function(x,y){
    // console.log("math operation parameters")
    console.log(`Subtraction of ${x} and ${y}is : ${x-y}`)
    

})
Mathoperation(20,30,function(x,y){
    // console.log("math operation parameters")
    console.log(`Multiply of ${x} and ${y}is : ${x*y}`)
    

})
Mathoperation(20,30,function(x,y){
    // console.log("math operation parameters")
    console.log(`Division of ${x} and ${y}is : ${x/y}` )
    

})
Mathoperation(20,30,function(x,y){
    // console.log("math operation parameters")
    console.log(`Modulus of ${x} and ${y}is : ${x%y}`)
    

})