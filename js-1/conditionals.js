function calcularColor(number){
    if(isNaN(number)){
        return "El valor no es un número"
    } else {
        switch (number){
            case 1: return "El color es negro";
            break;
            case 2: return "El color es blanco";
            break;
            case 3: return "El color es azul";
            break;
            default: return "El color es verde";
        }
    }
}

// código de prueba
console.log(calcularColor(1)) // "El color es negro"
console.log(calcularColor(2)) // "El color es blanco"
console.log(calcularColor(3)) // "El color es azul"
console.log(calcularColor(8)) // "El color es verde"