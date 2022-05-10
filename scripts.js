class validator {

 constructor() {
     this.validations = [

     ]
 }

 // iniciar a validação de todos os campos
 validade(form) {

    // pegar os inputs
    let inputs = form.getelementbyTagName('input');

    // transformo uma HTMLCollection -> array
    let inputsArray = [...inputs];

    // loop nos inputs e validação mediante ao que for encontrado 
    inputsArray.forEach(function(input) {

    })
 }

}


let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new validator();

// evento que dispara validações
submit.addEventListener('click', function(e) {

    e.preventDefault();

   validator.validate(form);

})
