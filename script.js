// ODNIESIENIA--------------------

//strona glowna
const tutylowa = document.getElementById("tytulowa");
const oferta = document.getElementById("tytulowaOferta");
const guzik = document.getElementById("ofertaGuzik");
const logoNapis = document.getElementById("logoNapis");



//FUNKCJE--------------------------


//strona glowna
guzik.addEventListener("click", function(){
    tytulowa.classList.remove("aktywna");
    oferta.classList.add("aktywna");
    
});

logoNapis.addEventListener("click", function(){
    oferta.classList.remove("aktywna");
    tytulowa.classList.add("aktywna");
});

