let input = "";
if (window.location.filename === 'index.html') {
    input = document.getElementById("naam").value;
    localStorage.setItem("myInputValue", input);
} else if (window.location.filename === 'home.html') {
    input = localStorage.getItem("myInputValue");
    document.getElementById("naamhome").innerHTML = input;
}
