function showModalColaboracao() {
    document.getElementById("myModalColaboracao").style.display = "block";
}

function hideModalColaboracao() {
    document.getElementById("myModalColaboracao").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModalColaboracao");
    if (event.target == modal) {
        hideModalColaboracao();
    }
}