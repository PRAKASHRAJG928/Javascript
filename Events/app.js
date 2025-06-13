// ! on click()

// function blue(){
//     document.body.style.background = "blue"
// }
// function red(){
//     document.body.style.background = "red"
// }
// function orange(){
//     document.body.style.background = "orange"
// }

function toogle(){
    let data = document.getElementById("toogle")
    if(data.style.display === "none"){
        data.style.display = "block"
    }else{
        data.style.display = "none"
    }
}