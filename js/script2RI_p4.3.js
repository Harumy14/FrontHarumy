function showModalCriativas() {
    document.getElementById("myModalCriativas").style.display = "block";
}

function hideModalCriativas() {
    document.getElementById("myModalCriativas").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModalCriativas");
    if (event.target == modal) {
        hideModalCriativas();
    }
}