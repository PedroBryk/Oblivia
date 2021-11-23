var btn = document.querySelector(".btn");

addEventListener("click", function(e){

    e.preventDefault();

    var TextoNomePet = document.querySelector("#nome-pet");

    var valuePet = TextoNomePet.value;

    var textoPet = document.querySelector(".nome-pet");

    var titulo = document.querySelector(".titulo-2");

    textoPet.textContent = valuePet;



    var TextoNomeDono = document.querySelector("#nome-dono");

    var valueDono = TextoNomeDono.value;

    var textoDono = document.querySelector(".nome-dono");

    textoDono.textContent = valueDono;


    
    var email = document.querySelector("#email");

    var valueEmail = email.value;

    var textoEmail = document.querySelector(".email");

    textoEmail.textContent = valueEmail;


    var especie = document.querySelector("#especie-cao");

    var valueEspecie = especie.value;

    var textoEspecie = document.querySelector(".especie-h");

    textoEspecie.textContent = valueEspecie;



    var raça = document.querySelector("#raça-cao");

    var valueRaça = raça.value;

    var textoRaça = document.querySelector(".raça-h");

    textoRaça.textContent = valueRaça;



    var pelagem = document.querySelector("#pelagem-cao");

    var valuePelagem = pelagem.value;

    var textoPelagem = document.querySelector(".pelagem-h");

    textoPelagem.textContent = valuePelagem;


    var sexo = document.querySelector("#sexo-cao");

    var valueSexo = sexo.value;

    var textoSexo = document.querySelector(".sexo-h");

    textoSexo.textContent = valueSexo;



    var idade = document.querySelector("#nascimento-cao");

    var valueIdade = idade.value;

    var textoIdade = document.querySelector(".nascimento-h");

    textoIdade.textContent = valueIdade;


    titulo.textContent = "Aqui está a carteirinha exclusiva do seu pet"

    
});



