let knop_logboek = document.getElementById("knop_naar_onstage");
let knop_ontwikkeling = document.getElementById("knop2_naar_onstage");
let knop_opdrachten = document.getElementById("knop_opdrachten");
let knop_reflectie = document.getElementById("knop_reflectie");

let unselect = document.getElementById("wanneer_niets_geselecteerd");
let onstage = document.getElementById("naar_onstage");
let opdrachten = document.getElementById("opdrachten");
let reflectie = document.getElementById("reflectiewpl4");

knop_logboek.addEventListener('click', naarOnstage);
knop_ontwikkeling.addEventListener('click', naarOnstage);
knop_opdrachten.addEventListener('click', openOpdrachten);
knop_reflectie.addEventListener('click', eindreflectie);

function naarOnstage() {
    unselect.style.display="none"
    onstage.style.display="flex"
    opdrachten.style.display="none"
    reflectie.style.display="none"
}

function openOpdrachten() {
    unselect.style.display="none"
    onstage.style.display="none"
    opdrachten.style.display="flex"
    reflectie.style.display="none"
}

function eindreflectie() {
    unselect.style.display="none"
    onstage.style.display="none"
    opdrachten.style.display="none"
    reflectie.style.display="flex"
}