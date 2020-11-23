function iniciar(){
    if(!localStorage.getItem('clique')){
        localStorage.setItem('clique', 0);
    }
    document.querySelector('#numeroCliques').innerText = localStorage.getItem('clique');
    console.log('Iniciando...')
}

function contarClique(){
    if(localStorage.getItem('clique')){
        let clique = parseInt(localStorage.getItem('clique'));
        clique++;
        localStorage.setItem('clique', clique);
    } else{
        localStorage.setItem('clique', 1);
    }
    document.querySelector('#numeroCliques').innerText = localStorage.getItem('clique');
}

iniciar();