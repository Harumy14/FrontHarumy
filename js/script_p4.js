function showModalLider() {
    document.getElementById("myModalLider").style.display = "block";
}

function hideModalLider() {
    document.getElementById("myModalLider").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModalLider");
    if (event.target == modal) {
        hideModalLider();
    }
}