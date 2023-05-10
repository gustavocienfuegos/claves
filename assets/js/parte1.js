const validBorder = ()=>{
    const foto =document.querySelector ("img");
    if (foto.style.border === "2px solid red"){
        foto.style.border = "0px solid red";}
        else{
            foto.style.border ="2px solid red";
        }
    }
