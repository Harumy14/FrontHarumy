function showModalResolucao() {
    document.getElementById("myModalResolucao").style.display = "block";
}

function hideModalResolucao() {
    document.getElementById("myModalResolucao").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModalResolucao");
    if (event.target == modal) {
        hideModalResolucao();
    }
}