function join(arrayToJoin) {
    if (!arrayToJoin.length) return "";  //! se toma como un "=== 0", es decir, no tiene longitud

    let finalText = "";
    for (let i of arrayToJoin) {
        finalText = finalText + i + ' ';
    }

    return finalText;
}

console.log(join(["Hola", "Mundo"])) // "Hola Mundo"
console.log(join(["Make", "It", "Real"])) // "Make It Real"
console.log(join([])) // ""
