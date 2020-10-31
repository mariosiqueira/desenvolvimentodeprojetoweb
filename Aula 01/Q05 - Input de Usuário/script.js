function mostrarFormulario(){
    document.querySelector('main').classList.remove('hidden');
}

function preencherFormulario(){
    let nome = prompt("Digite seu nome:");
    let cpf = prompt("Digite seu CPF:");
    let rg = prompt("Digite seu RG:");

    document.getElementById('nome').value = nome;
    document.getElementById('cpf').value = cpf;
    document.getElementById('rg').value = rg;

    mostrarFormulario();
}

preencherFormulario();