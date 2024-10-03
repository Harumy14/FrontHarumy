function showModalComunicador() {
    document.getElementById("myModalComunicador").style.display = "block";
}

function hideModalComunicador() {
    document.getElementById("myModalComunicador").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModalComunicador");
    if (event.target == modal) {
        hideModalComunicador();
    }
}