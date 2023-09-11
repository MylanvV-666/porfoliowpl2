document.getElementById("lets_go_button").addEventListener("click", doorgaan);
function doorgaan(){
    let input = "";
    if (window.location.pathname === '/index.html' || window.location.href === 'https://mylan-van-vugt.netlify.app') {
        input = document.getElementById("naam").value;
        console.log("Saving input value:", input);
        localStorage.setItem("myInputValue", input);
    }
    else {
        input = localStorage.getItem("myInputValue");
        console.log("Retrieved input value:", input);
        document.getElementById("naamhome").innerHTML = input;
    }
}

