function showModalAnalistico() {
    document.getElementById("myModalAnalistico").style.display = "block";
}

function hideModalAnalistico() {
    document.getElementById("myModalAnalistico").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModalAnalistico");
    if (event.target == modal) {
        hideModalAnalistico();
    }
}