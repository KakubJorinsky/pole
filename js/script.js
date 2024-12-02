const nabidka = ["CPU", "GPU", "RAM"];
const kosik = [];

function vypis(array, output){
    document.getElementById(output).innerHTML = "";
    for(let i=0; i<array.length; i++){
        document.getElementById(output).innerHTML += i+1 + ". " + array[i] + "<br>";
    }
}

function Add(){
    const input = document.getElementById("add-component");
    const content = document.getElementById("content");
    const user_cart = document.getElementById("user-cart")

    if((input.value<=nabidka.length) && (input.value>0) && (!isNaN(input.value))){
        kosik.push(nabidka[input.value - 1]);
        let cisilko = input.value - 1
        nabidka.splice(cisilko, 1);
        vypis(nabidka, "content");
    }

    else{
        alert("Chybiška sa vlódila.")
    }
    vypis(kosik, "user-cart");
}

vypis(nabidka, "content");