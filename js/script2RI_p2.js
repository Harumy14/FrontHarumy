function showModalOrganiza() {
    document.getElementById("myModalOrganiza").style.display = "block";
}

function hideModalOrganiza() {
    document.getElementById("myModalOrganiza").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModalOrganiza");
    if (event.target == modal) {
        hideModalOrganiza();
    }
}