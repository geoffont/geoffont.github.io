/*--------------fonction slide-----------*/

let img__slider = document.getElementsByClassName("img__slider");

let etape = 0;

let nbr__img = img__slider.length;

let precedent = document.querySelector(".precedent");
let suivant = document.querySelector(".suivant");

function enleverActiveImages() {
  for (let i = 0; i < nbr__img; i++) {
    img__slider[i].classList.remove("active");
  }
}

suivant.addEventListener("click", function () {
  etape++;
  if (etape >= nbr__img) {
    etape = 0;
  }
  enleverActiveImages();
  img__slider[etape].classList.add("active");
});

precedent.addEventListener("click", function () {
  etape--;
  if (etape < 0) {
    etape = nbr__img - 1;
  }
  enleverActiveImages();
  img__slider[etape].classList.add("active");
});
/*------------------fonction formulaire------*/

let systeme_solaire = document.getElementById("systeme_solaire");

let popup = document.querySelector(".popup")
function openPopup() {
  popup.classList.add("openpopup")
}
function closePopup() {
  popup.classList.add("closepopup")
}

document
  .getElementById("formulaire")
  .addEventListener("submit", function (event) {
    let inpuText = document.querySelector(".inpuText").value;
    
    event.preventDefault();

    let inputSubmit = document.querySelector(".inputSubmit");
    inputSubmit.innerHTML = inpuText;


    if (getComputedStyle(systeme_solaire).display != "none") {
      systeme_solaire.style.display = "none";
    }
    if (window.innerWidth < 600) {
      "systeme_solaire".hide(systeme_solaire);
    } else {
      systeme_solaire.style.display = "block";
    }
  });

/*-----------------fonction scroll---------------*/
window.addEventListener("scroll", function () {
  const distance = window.scrollY;
  document.querySelector("#header").style.transform = `translateY(${
    distance * 0.55
  }px)`;
  document.querySelector("body").style.transform = `translateY(${
    distance * -0.55
  }px)`;
});