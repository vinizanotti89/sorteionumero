function generateNumber(){

    const min = Math.ceil(document.querySelector(".min").value)
    const max = Math.floor(document.querySelector(".max").value)

    if(max > min){
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result)
    }else {
        alert ("O valor mínimo tem que ser MENOR que o valor máximo")
    }
    

}



