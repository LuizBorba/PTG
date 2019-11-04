function modificarTela(msg, img, background) {

    window.document.getElementById ('msg').innerHTML = msg
    window.document.getElementById('imagem').src = img
    document.body.style.background = background
}

function carregar() {
    var data= new Date()
    var hora= data.getHours()
    
    switch(true){
    case hora >= 6 && hora < 12:
        modificarTela(`Bom Dia !`, "manha.png", "#6872a3");
        break;
    case hora >= 12 && hora < 18:
        modificarTela(`Boa Tarde !`, "tarde.png", "#a1764b");
        break;
    case hora >= 0 && hora < 6:
        modificarTela("Boa Madrugada!", "manha.png", "#124578");
        break;
    default: 
        modificarTela(`Boa Noite !`, "noite.png", "#28282a");
    }
}