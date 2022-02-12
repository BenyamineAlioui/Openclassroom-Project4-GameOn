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
  let email = document.querySelector("#email");
  let birthdate = document.querySelector("#birthdate");
  let quantity = document.querySelector("#quantity");
  let city = document.querySelectorAll(".city");
  let userConditions = document.querySelector("#checkbox1");

  // Expression reguliere
  let validEmailRegex = /.+\@.+\..+/;
  let validBirthdateRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  let validQuantityRegex = /^[0-9]+$/;
  
  // 
  let firstNameFormValid = true;
  let lastNameFormValid = true;
  let emailFormValid = true;
  let birthdateFormValid = true;
  let quantityFormValid = true;
  let cityFormValid = true;
  let userConditionsFormValid = true;

    e.preventDefault();

    if (firstName.value.length < 2) {
      let myError = document.querySelector(".errorFirstName");
      let myBorder = document.querySelector(".text-control1");
      myError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      myBorder.style.borderColor = "red";
      firstNameFormValid = false;
      
      
    } else{
      let myError = document.querySelector(".errorFirstName");
      let myBorder = document.querySelector(".text-control1");
      myError.style.display = "none";
      myBorder.style.borderColor = "green";
    } 
    
    if (lastName.value.length < 2) {
      let myError = document.querySelector(".errorLastName");
      let myBorder = document.querySelector(".text-control2");
      myError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      myBorder.style.borderColor = "red";
      lastNameFormValid = false;
      
    } else{
      let myError = document.querySelector(".errorLastName");
      let myBorder = document.querySelector(".text-control2");
      myError.style.display = "none";
      myBorder.style.borderColor = "green";
    }
   
    if (validEmailRegex.test(email.value) == false) {
      myError = document.querySelector(".errorEmail");
      myBorder = document.querySelector(".text-control3");
      myError.innerHTML = "L'adresse email saisie n'est pas valide.";
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      myBorder.style.borderColor = "red";
      emailFormValid = false;
      
    } else{
      let myError = document.querySelector(".errorEmail");
      let myBorder = document.querySelector(".text-control3");
      myError.style.display = "none";
      myBorder.style.borderColor = "green";
    }
    
    if (validBirthdateRegex.test(birthdate.value) == false) {
      myError = document.querySelector(".errorBirthdate");
      myBorder = document.querySelector(".text-control4");
      myError.innerHTML = "La date de naissance saisie n'est pas valide."
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      myBorder.style.borderColor = "red";
      birthdateformValid = false;
      
    } else{
      let myError = document.querySelector(".errorBirthdate");
      let myBorder = document.querySelector(".text-control4");
      myError.style.display = "none";
      myBorder.style.borderColor = "green";
    }
    
    if (validQuantityRegex.test(quantity.value) == false) {
      myError = document.querySelector(".errorQuantity");
      myBorder = document.querySelector(".text-control5");
      myError.innerHTML = "Ce champs n'est pas valide."
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      myBorder.style.borderColor = "red";
      quantityFormValid = false;
      
    } else{
      let myError = document.querySelector(".errorQuantity");
      let myBorder = document.querySelector(".text-control5");
      myError.style.display = "none";
      myBorder.style.borderColor = "green";
    }

    // au moins un element checked == true
    let isChecked = false;
    for(let i = 0; i < city.length; i++){
      let element = city[i];
      if(element.checked) {
        isChecked = true;
        break;
      }
    }

    if (isChecked) {
      cityFormValid = true;
      let myError = document.querySelector(".errorCity");
      myError.style.display = "none";
    } else{
      myError = document.querySelector(".errorCity");
      myError.innerHTML = "Ce champs est requis";
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      cityFormValid = false;
    } 
    
    if (userConditions.checked == false) {
      myError = document.querySelector(".errorUC");
      myError.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
      myError.style.color = "red";
      myError.style.fontSize = "13px";
      userConditionsFormValid = false;
    } else{
      let myError = document.querySelector(".errorUC");
      myError.style.display = "none";
    }

    if (firstNameFormValid & lastNameFormValid & emailFormValid & birthdateFormValid & quantityFormValid & cityFormValid & userConditionsFormValid){
      console.log("182")
      modal1.style.display = "none";
      modal2.style.display = "block";
    }

})


const modal1 = document.querySelector(".content");
const modal2 = document.querySelector(".content2");
const btnSubmit = document.querySelector(".btn-submit")

// On écoute l'évenement click avec la fonction submitValid
//btnSubmit.addEventListener('click', submitValid);

//On crée la fonction submitValid qui permet de d'afficher le message de bienvenue
//function submitValid () {}

// On récupère le btn close de la seconde modal
const btnClose2 = document.querySelector(".close2"); 

// On écoute l'évenement click avec la fonction closeModal
btnClose2.addEventListener('click', closeModal2);

//On crée la fonction closeModal qui permet de fermer la modal
function closeModal2 () {
  modalbg.style.display = "none";
}

// On écoute l'évenement click avec la fonction refresh
btnClose2.addEventListener('click', refresh);

// On récupère le btn fermer de la seconde modal
const btnFermer = document.querySelector(".btn-fermer");

// On écoute l'évenement click avec la fonction closeModal
btnFermer.addEventListener('click', closeModal2);

// On écoute l'évenement click avec la fonction refresh
btnFermer.addEventListener('click', refresh);






