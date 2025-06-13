let onepiece =[`anime-one-piece-brook-one-piece-franky-one-piece-wallpaper-preview.jpg`,
    `images.jpeg`,`thumb-1920-860838.jpg`,`thumb-1920-1352216.png`]


    let index = 0;
    let image = document.getElementById("image");
    function rightclick(){
        if (index < onepiece.length -1){
            index++;
        }
        else{
            index=0;
        }
        image.src=onepiece[index];
    
    }
    let left_button =document.getElementById("left_button")
    left_button.addEventListener("click",rightclick)

    function leftclick(){
        if (index > 0){
            index--;
        }
        else{
            index=onepiece.length-1;
        }
        image.src=onepiece[index];
    
    }
    let right_button =document.getElementById("right_button")
    right_button.addEventListener("click",leftclick)