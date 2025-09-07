//------------------------------ODNIESIENIA--------------------------

//-----------------strona glowna
const tutylowa = document.getElementById("tytulowa");
const oferta = document.getElementById("tytulowaOferta");
const guzik = document.getElementById("ofertaGuzik");
const ofertaPowrot = document.getElementById("ofertaPowrot");


//-----------------Formularz
const inputZdjecia = document.getElementById('zdjecia');
const plikLista = document.querySelector('.plikLista');

// Tablica przechowująca wybrane pliki
let selectedFiles = [];

//telefon input
const telInput = document.getElementById("tel");

//------------------------------FUNKCJE--------------------------


//-----------------strona glowna
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


//-----------------Formularz
//wrzucanie zdjec
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

        this.value = "";
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

    // nazwa pliku
    const fileName = document.createElement('span');
    fileName.textContent = file.name;

    // krzyżyk
    const close = document.createElement('span');
    close.textContent = '✖';
    close.classList.add('close');

    // kliknięcie krzyżyka usuwa plik
    close.addEventListener('click', (e) => {
      e.stopPropagation(); // żeby kliknięcie nie wywołało nic na li
      selectedFiles.splice(index, 1);
      renderFileList();
    });

    li.appendChild(fileName);
    li.appendChild(close);
    plikLista.appendChild(li);
  });
}


//Wpisywanie myslnikow w telefonie
telInput.addEventListener("input", function() {
  // Usuwamy wszystko oprócz cyfr
  let liczby = this.value.replace(/\D/g, "");

  // Formatowanie: 3-3-3 (123-456-789)
  if (liczby.length > 3 && liczby.length <= 6) {
    liczby = liczby.replace(/(\d{3})(\d+)/, "$1-$2");
  } else if (liczby.length > 6) {
    liczby = liczby.replace(/(\d{3})(\d{3})(\d+)/, "$1-$2-$3");
  }

  this.value = liczby;
});

  
