function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// On récupère le btn close de la modal
const btnClose = document.querySelector(".close"); 

// On écoute l'évenement click
btnClose.addEventListener('click', closeModal);

//On crée la fonction closeModal
function closeModal () {
  modalbg.style.display = "none";
}
  
// On récupère tout les elements du formulaire
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");

const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const locationn = document.querySelector(".radio");
const userConditions = document.querySelector("#checkbox1");

let myForm = document.getElementById("modalForm") 

myForm.addEventListener('submit', function(e) {
  let email = document.querySelector(".formData .email");
  let validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (email.value == "") {
      let myError = document.querySelector(".error")
      myError.innerHTML = "Le champs email est requis."
      myError.style.color = "red";
      e.preventDefault();

    }else if (validRegex.test(email.value) == false) {
      let myError = document.querySelector(".error")
      myError.innerHTML = "Adresse email non valide."
      myError.style.color = "red";
      e.preventDefault();
    }
})









