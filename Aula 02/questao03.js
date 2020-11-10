function swapCase(letra){
    return letra.toUpperCase() == letra ? letra.toLowerCase() : letra.toUpperCase();
}

function swapString(string){
    let resultado = '';
    let stringDividida = string.split(' ');
    for(let i = 0; i < stringDividida.length; i++){
        for(j in stringDividida[i]){
            resultado += stringDividida[i][j].replace(stringDividida[i][j], swapCase(stringDividida[i][j]));
            if(j == stringDividida[i].length - 1)
                resultado += ' ';
        }
    }
    console.log(resultado);
}

swapString('Mário      Sérgio dos Santos Siqueira');
