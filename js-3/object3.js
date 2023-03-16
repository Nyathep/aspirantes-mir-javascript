let receta = {};

receta.nombre = "Sandwich";

receta.ingredientes = [];

receta.ingredientes.push({
    nombre: "Pan",
    cantidad: 2
});

receta.ingredientes.push({
    nombre: "Queso",
    cantidad: 1
});

console.log(receta.ingredientes[0].nombre);

let sum = 0;

for (let i in receta.ingredientes) {
    sum += receta.ingredientes[i].cantidad;
}

console.log(sum);