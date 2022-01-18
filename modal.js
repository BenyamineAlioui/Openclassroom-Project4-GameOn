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

// On écoute l'évenement click avec la fonction closeModal
btnClose.addEventListener('click', closeModal);

//On crée la fonction closeModal qui permet de fermer la modal
function closeModal () {
  modalbg.style.display = "none";
}

// On écoute l'évenement click avec la fonction refresh
btnClose.addEventListener('click', refresh);

//On crée la fonction refresh pour actualiser la pages a la fermeture de la modal pour avoir une modal vide à sa reouverture
function refresh () {
  location.reload(true);
}

//On crée une variable en recuperant notre formulaire
let myFormValidation = document.getElementById("modalForm") 

//On crée une fonction pour la validation du formulaire
myFormValidation.addEventListener('submit', function(e) {
  
  // On récupère tout les elements du formulaire
  let firstName = document.querySelector("#first");
  let lastName = document.querySelector("#last");
  let email = document.querySelector(".formData .email");
  let birthdate = document.querySelector("#birthdate");
  let quantity = document.querySelector("#quantity");
  let locatiOn1 = document.querySelector("#location1");
  let locatiOn2 = document.querySelector("#location2");
  let locatiOn3 = document.querySelector("#location3");
  let locatiOn4 = document.querySelector("#location4");
  let locatiOn5 = document.querySelector("#location5");
  let locatiOn6 = document.querySelector("#location6");
  let userConditions = document.querySelector("#checkbox1");

  // Expression reguliere
  let validEmailRegex = /.+\@.+\..+/;
  let validBirthdateRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  let validQuantityRegex = /^[0-9]+$/;
  
   
    if (firstName.value.length < 2) {
      let myError = document.querySelector(".errorFirstName");
      let myBorder = document.querySelector(".text-control1");
      myError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      myBorder.style.borderColor = "red";
      e.preventDefault();
    }

    if (lastName.value.length < 2) {
      myError = document.querySelector(".errorLastName");
      myBorder = document.querySelector(".text-control2");
      myError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      myBorder.style.borderColor = "red";
      e.preventDefault();
    }
    
    if (validEmailRegex.test(email.value) === false) {
      myError = document.querySelector(".errorEmail");
      myBorder = document.querySelector(".text-control3");
      myError.innerHTML = "L'adresse email saisie n'est pas valide.";
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      myBorder.style.borderColor = "red";
      e.preventDefault();
    }

    if (validBirthdateRegex.test(birthdate.value) === false) {
      myError = document.querySelector(".errorBirthdate");
      myBorder = document.querySelector(".text-control4");
      myError.innerHTML = "La date de naissance saisie n'est pas valide."
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      myBorder.style.borderColor = "red";
      e.preventDefault();
    }
    
    if (validQuantityRegex.test(quantity.value) === false) {
      myError = document.querySelector(".errorQuantity");
      myBorder = document.querySelector(".text-control5");
      myError.innerHTML = "Ce champs n'est pas valide."
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      myBorder.style.borderColor = "red";
      e.preventDefault();
    }
    
    if (locatiOn1.checked === false) {
      myError = document.querySelector(".errorLocation1");
      myError.innerHTML = "Ce champs est requis";
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      e.preventDefault();
    } else if (locatiOn2.checked === false) {
      myError = document.querySelector(".errorLocation2");
      myError.innerHTML = "Ce champs est requis";
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      e.preventDefault();
    } else if (locatiOn3.checked === false) {
      myError = document.querySelector(".errorLocation3");
      myError.innerHTML = "Ce champs est requis";
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      e.preventDefault();
    } else if (locatiOn4.checked === false) {
      myError = document.querySelector(".errorLocation4");
      myError.innerHTML = "Ce champs est requis";
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      e.preventDefault();
    } else if (locatiOn5.checked === false) {
      myError = document.querySelector(".errorLocation5");
      myError.innerHTML = "Ce champs est requis";
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      e.preventDefault();
    } else if (locatiOn6.checked === false) {
      myError = document.querySelector(".errorLocation6");
      myError.innerHTML = "Ce champs est requis";
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      e.preventDefault();
    } 

    if (userConditions.checked === false) {
      myError = document.querySelector(".errorUC");
      myError.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      e.preventDefault();
    }

})









