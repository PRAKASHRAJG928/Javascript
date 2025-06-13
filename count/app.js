let btn = document.getElementById("count")
let count =0
function increment(){
    count++
    btn.innerHTML = count
}
function decrement(){
    count--
    btn.innerHTML = count
}
function reset(){
    count=0;
    btn.innerHTML = count
}