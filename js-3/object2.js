let persona = {
    nombre: "David Martinez",
    edad: "20",
    ciudad: "Bogotá",
    profesion: "Ingeniero de sistemas"
}

console.log(persona);

function presentacion(object) {
    return `Mi nombre es ${object.nombre}, tengo ${object.edad} años y actualmente vivo en ${object.ciudad}`;
}

let mensaje = presentacion(persona);

console.log(mensaje);

persona.hobbies = ["bmx", "leer", "nadar", "videojuegos"];

console.log(persona.hobbies);

for(let i in persona.hobbies){
    console.log(persona.hobbies[i]);
}

