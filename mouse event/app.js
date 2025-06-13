let div = document.getElementsByTagName("div")
console.log(div);


let pureArray = Array.from(div);
console.log(pureArray)


pureArray.map((e)=>{
    e.addEventListener("mouseover",()=>{
        e.style.background = e.innerHTML;
        
    })


     e.addEventListener("mouseout",()=>{
        e.style.background = "initial";
    })
}) 

