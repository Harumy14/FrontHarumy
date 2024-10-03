function showModalCriatvo() {
    document.getElementById("myModalCriativo").style.display = "block";
}

function hideModalCriativo() {
    document.getElementById("myModalCriativo").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModalCriativo");
    if (event.target == modal) {
        hideModalCriativo();
    }
}