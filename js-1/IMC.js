function bmi(weight, heightDot){
    let resultado;
    weight === 0 || heightDot === 0 ? resultado = 0 : resultado = weight / heightDot ** 2; //Nota: usar doble asterisco en vez de Math.pow
    return resultado;
}

// código de prueba
console.log(bmi(65, 1.8)) // 20.061728395061728
console.log(bmi(72, 1.6)) // 28.124999999999993
console.log(bmi(52, 1.75)) //  16.979591836734695