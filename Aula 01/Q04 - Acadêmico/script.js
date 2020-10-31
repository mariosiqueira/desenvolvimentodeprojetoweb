function media(nota1, nota2){
    return ((nota1 + nota2)/2).toFixed(2);
}

function informarSituacao(mediaAluno){
    if(mediaAluno >= 7){
        return 'Aprovado';
    } else if(mediaAluno >= 3){
        return 'Final';
    }
    else{
        return 'Reprovado';
    }
}

function calcularMedia(){
    let nome = document.getElementById('nome').value;
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);

    nota1 = (nota1) ? nota1 : 0;
    nota2 = (nota2) ? nota2 : 0;

    if(nome){
        
        let mediaAluno = media(nota1, nota2);
        let situacao = informarSituacao(mediaAluno);
        linha = document.getElementById('linha').cloneNode(true);
        let colunas = linha.querySelectorAll('td');
        colunas[0].innerHTML = `${nome}`;
        colunas[1].innerHTML = `${nota1}`;
        colunas[2].innerHTML = `${nota2}`;
        colunas[3].innerHTML = `${mediaAluno}`;
        colunas[4].innerHTML = `${situacao}`;
        document.querySelector('table').appendChild(linha);

    } else{
        alert('O nome do aluno não foi preenchido!');
    }
    

}