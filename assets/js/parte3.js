function passwordCheck(){
    let numero1 = document.querySelector("#option1").value;
    let numero2 = document.querySelector("#option2").value;
    let numero3 = document.querySelector("#option3").value;
    let tryResult = document.querySelector("#texto")
    let password = numero1 + numero2 + numero3;
    if(password=="911"){
        tryResult.innerHTML = "contraseña 1 correcta";
    } else if (password=="714"){
        tryResult.innerHTML = "contraseña 2 correcta";
    }else{
        tryResult.innerHTML = "contraseña incorrecta";
    }

}



