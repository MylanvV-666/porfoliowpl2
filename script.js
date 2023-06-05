window.onload = doorgaan;
document.getElementById("lets_go_button").addEventListener("click", doorgaan);
function doorgaan(){
    let input = "";
    if (window.location.pathname === '/portfolio/index.html') {
        input = document.getElementById("naam").value;
        console.log("Saving input value:", input);
        localStorage.setItem("myInputValue", input);
    }
    if (window.location.pathname === '/portfolio/home.html') {
        input = localStorage.getItem("myInputValue");
        console.log("Retrieved input value:", input);
        document.getElementById("naamhome").innerHTML = input;
    }
}
doorgaan();

