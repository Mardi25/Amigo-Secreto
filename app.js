//agregar nombre a lista
//generar amigo secreto no repetido
//limpiar lista cuando se genere el total de 
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value();
    if (nombre.includes(nombre)) {
        amigos.push(nombre);
        let listaAmigos = document.getElementById('listaAmigos');
        input.value = '';
    }
    
}

function sortearAmigo(){
    let resultados = document.getElementById('resultado');
    resultados.innerHTML = '';
    if(amigos.length < 2){
        alert('Se necesitan al menos 2 amigos para amigo secreto')
        return;    
    }
    let amigos = Math.floor(Math.random()*listaAmigos.length);
}
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
    
}