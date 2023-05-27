//ask page
document.getElementById("lets_go_button").addEventListener("click", doorgaan);

function doorgaan() {
    let next = document.getElementById("naam").value;
    document.getElementById("naamhome").innerHTML = next;
}
doorgaan();
