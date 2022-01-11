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
  
//On crée une variable en recuperant notre formulaire
let myFormValidation = document.getElementById("modalForm") 

//On crée une fonction 
myFormValidation.addEventListener('submit', function(e) {

  // On récupère tout les elements du formulaire
  let firstName = document.querySelector("#first");
  let lastName = document.querySelector("#last");
  let email = document.querySelector(".formData .email");
  let birthdate = document.querySelector("#birthdate");
  let quantity = document.querySelector("#quantity");
  let locationn = document.querySelector(".radio");
  let userConditions = document.querySelector("#checkbox1");
  let validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (firstName.value == "") {
      let myError = document.querySelector(".error")
      myError.innerHTML = "Le champ prénom est requis"
      myError.style.color = "red";
      e.preventDefault();
    }else if (d) {
      let myError = document.querySelector(".error")
      myError.innerHTML = ""
      myError.style.color = "red";
      e.preventDefault();
    }
    if (lastName.value == "") {
      let myError = document.querySelector(".error")
      myError.innerHTML = "Le champ nom est requis"
      myError.style.color = "red";
      e.preventDefault();
    }else if (d) {
      let myError = document.querySelector(".error")
      myError.innerHTML = ""
      myError.style.color = "red";
      e.preventDefault();
    }
    if (email.value == "") {
      let myError = document.querySelector(".error")
      myError.innerHTML = "Le champ email est requis."
      myError.style.color = "red";
      e.preventDefault();
    }else if (validRegex.test(email.value) == false) {
      let myError = document.querySelector(".error")
      myError.innerHTML = "Adresse email non valide."
      myError.style.color = "red";
      e.preventDefault();
    }
    if (birthdate.value == "") {
      let myError = document.querySelector(".error")
      myError.innerHTML = "Le champ date de naissance est requis"
      myError.style.color = "red";
      e.preventDefault();
    }else if (df) {
      let myError = document.querySelector(".error")
      myError.innerHTML = ""
      myError.style.color = "red";
      e.preventDefault();
    }
    if (quantity.value == "") {
      let myError = document.querySelector(".error")
      myError.innerHTML = "Ce champs est requis"
      myError.style.color = "red";
      e.preventDefault();
    }else if (f) {
      let myError = document.querySelector(".error")
      myError.innerHTML = ""
      myError.style.color = "red";
      e.preventDefault();
    }
})









