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
  let myError = document.querySelector(".error");
  let myBorder = document.querySelector(".text-control");
  // Expression reguliere
  let validEmailRegex = /(?:^|\s)[\w!#$%&'*+/=?^`{|}~-](\.?[\w!#$%&'*+/=?^`{|}~-]+)*@\w+[.-]?\w*\.[a-zA-Z]{2,3}\b/;
  let birthdateRegEx = /(Date of birth:|Birthday:)\s+(?:0[1-9]|1[012])[-/.](?:0[1-9]|[12][0-9]|3[01])[-/.](?:19\d{2}|20[01][0-9]|2020)\b/;

    if (firstName.value == "") {
      myError.innerHTML = "Le champ prénom est requis";
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      myBorder.style.borderColor = "red";
      e.preventDefault();
    }else if ( 0 < firstName.value.length <= 2 ) {
      myError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      myBorder.style.borderColor = "red";
      e.preventDefault();
    } else {
      myBorder.style.borderColor = "green";
    }

    if (lastName.value == "") {
      myError.innerHTML = "Le champ nom est requis.";
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      myBorder.style.borderColor = "red";
      e.preventDefault();
    }else if ( 0 < lastName.value.length <= 2 ) {
      let myError = document.querySelector(".error");
      myError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      myBorder.style.borderColor = "red";
      e.preventDefault();
    } else {
      myBorder.style.borderColor = "green";
    }

    if (email.value === "") {
      myError.innerHTML = "Le champ email est requis.";
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      myBorder.style.borderColor = "red";
      e.preventDefault();
    }else if (validEmailRegex.test(email.value) === false) {
      let myError = document.querySelector(".error");
      myError.innerHTML = "Adresse email non valide.";
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      myBorder.style.borderColor = "red";
      e.preventDefault();
    } 

    if (birthdate.value === "") {
      myError.innerHTML = "Le champ date de naissance est requis";
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      myBorder.style.borderColor = "red";
      e.preventDefault();
    }else if (birthdateRegEx.test(birthdate.value) === false) {
      let myError = document.querySelector(".error");
      myError.innerHTML = ""
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      myBorder.style.borderColor = "red";
      e.preventDefault();
    } else {
      
    }

    if (quantity.value == "") {
      myError.innerHTML = "Ce champs est requis";
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      myBorder.style.borderColor = "red";
      e.preventDefault();
    }
    
    if (location.value == false) {
      let myError = document.querySelector(".error");
      myError.innerHTML = "Ce champs est requis";
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      e.preventDefault();
    } 

    if (userConditions.value == false) {
      myError.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      e.preventDefault();
    } else {
      
    }
})









