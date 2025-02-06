let amigos = [];


function agregarAmigo() {
    let nombre = document.getElementById(`amigo`);
    if ( nombre != amigos) {
        let nuevoAmigo = { id: amigos.length + 1, nombre };
        amigos.push(nuevoAmigo);
        const listaAmigos = document.getElementById('listaAmigos');
        const li = document.createElement('li');
        li.textContent = `${nuevoAmigo.id}: ${nuevoAmigo.nombre}`;
        input.value = '';
    } else ( nombre === amigos); {
        alert ('Este nombre ya esta en la lista');
        console.log (agregarAmigo);
    }
    
}

function sortearAmigo(){
    let resultados = document.getElementById('resultado');
    resultados.innerHTML = '';
    if(amigos.length < 2){
        alert('Se necesitan al menos 2 amigos para amigo secreto')
        return;    
    }

    if(listaAmigos.length == amigos){
        alert ('Ya se sortearon todos los nombres')
        return agregarAmigo
    } 
}
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listAmigos');
    listaAmigos.innerHTML = '';
}
