function fatorial(numero){
    if(numero == 0 || numero == 1){
        return 1;
    } else{
        return numero * fatorial(numero - 1);
    }
}

function removerNodes(){
    document.getElementById('result').innerHTML = '';
}

function calcular(){
    removerNodes();
    let inicial = parseInt(document.getElementById('inicial').value);
    let final = parseInt(document.getElementById('final').value);
    if(inicial < 0 || final < 0){
        let nodeP = document.querySelector('#model p').cloneNode(true);
        nodeP.innerHTML = 'Não é possível calcular fatorial de número inteiro negativo.<br>Por favor, insira apenas números naturais no intervalo!';
        nodeP.style = 'color: red;';
        document.getElementById('result').appendChild(nodeP);
    } else{
        for(let numero = inicial; numero <= final; numero++){
            let nodeP = document.querySelector('#model p').cloneNode(true);
            nodeP.innerHTML = `${numero}!` + ' = ' + fatorial(numero);
            document.getElementById('result').appendChild(nodeP);
        }
    }
}