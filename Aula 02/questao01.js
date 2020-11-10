let vetor = [2, 3, 5, 7];

function somaDosQuadrados(vetor){
    let soma = 0;
    vetor.forEach(item => {
        soma += (item * item)
    });
    
    return soma;
}

console.log(somaDosQuadrados(vetor));