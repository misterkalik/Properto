// ODNIESIENIA--------------------

//strona glowna
const tutylowa = document.getElementById("tytulowa");
const oferta = document.getElementById("tytulowaOferta");
const guzik = document.getElementById("ofertaGuzik");
const ofertaPowrot = document.getElementById("ofertaPowrot");


//Formularz
const inputZdjecia = document.getElementById('zdjecia');
const plikLista = document.querySelector('.plikLista');

// Tablica przechowująca wybrane pliki
let selectedFiles = [];

//FUNKCJE--------------------------


//strona glowna
if(guzik){
guzik.addEventListener("click", function(){
    tytulowa.classList.remove("aktywna");
    oferta.classList.add("aktywna");
    
})};

if(ofertaPowrot){
ofertaPowrot.addEventListener("click", function(){
    oferta.classList.remove("aktywna");
    tytulowa.classList.add("aktywna");
})};


//Formularz
if(inputZdjecia){
    inputZdjecia.addEventListener('change', function() {
        if (this.files.length > 0) {
          // dodajemy nowe pliki do tablicy (unikalne)
          Array.from(this.files).forEach(file => {
            if (!selectedFiles.some(f => f.name === file.name)) {
              selectedFiles.push(file);
            }
          });
        }
      
        renderFileList();
      });
};

function renderFileList() {
    plikLista.innerHTML = '';
  
    if (selectedFiles.length === 0) {
        plikLista.innerHTML = '<li>Brak plików</li>';
      return;
    }
  
    selectedFiles.forEach((file, index) => {
      const li = document.createElement('li');
      li.textContent = file.name;
  
      // kliknięcie usuwa plik
      li.addEventListener('click', () => {
        selectedFiles.splice(index, 1);
        renderFileList();
      });
  
      plikLista.appendChild(li);
    });
  }
