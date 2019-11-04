document.addEventListener("click", carregar());

function endereço(url) {

    var url = ""
    window.document.getElementById('mapa').src = url
}

function carregar() {

    window.document.addEventListener("click", carregar(, true))
    
    switch(true){
    default : endereço("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10592.76783456433!2d-48.67220412781516!3d-26.773117937641754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8d393e9efdae1%3A0x43bc6763c022b0!2sCapit%C3%A3o%20Gato%20-%20Escuna%20Pirata%20-%20Penha!5e0!3m2!1spt-BR!2sbr!4v1572894301427!5m2!1spt-BR!2sbr");
    break;
}