
export function carta(url){
    const carta = document.createElement('div');
    const imagen = document.createElement('img');
    imagen.src = url;
    carta.appendChild(imagen); 
    return carta;
}