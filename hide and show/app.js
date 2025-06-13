function hide()
{
    let image = document.getElementById("image")
    let button= document.getElementById("button")
    if (image.style.visibility == "visible")
      {
            image.style.visibility="hidden"
            button.innerText="show"
      }  
    else
     {
            image.style.visibility="visible"
            button.innerText="hide"
     }









}
// function show()
// {
//     let image = document.getElementById("image")
//     image.style.visibility="visible"
// }