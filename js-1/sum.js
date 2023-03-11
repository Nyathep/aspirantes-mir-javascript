function suma(positiveNumber){
    if(positiveNumber < 0 || isNaN(positiveNumber)){
        return "Número no valido"
    } else {
        let total = 0;
        for(let i = 0 ; i < positiveNumber; i++){
            total = total + (i+1);
        }
        return total;
    }
}

// código de prueba
console.log(suma(4)) // 1 + 2 + 3 + 4 = 10
console.log(suma(10)) // 55
console.log(suma(15)) // 120