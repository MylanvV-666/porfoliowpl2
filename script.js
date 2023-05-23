//ask page
document.getElementById("lets_go_button").addEventListener("click", doorgaan);

function doorgaan() {
    let next = document.getElementById("naam").value;
    localStorage.setItem("naam", next);
}
let naam2 = localStorage.getItem("naam");
document.getElementById("naamhome").innerHTML = naam2;