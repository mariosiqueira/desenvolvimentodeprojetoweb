function contains(matriz, elemento){
    for(let i in matriz){
        if(matriz[i][0] == elemento)
            return true
    }
    return false;
}

function separarValores(vetor, listasValoresAgrupados){
    for(let i in vetor){
        let lista = vetor.filter(function(item){
            return (item == vetor[i]) ? true : false;
        })
        //Evita duplicação de conjuntos de mesmo valor para agrupar
        if(!contains(listasValoresAgrupados, lista[0]))
            listasValoresAgrupados.push(lista);
    }
}

function calcularModa(vetor){
    let listasValoresAgrupados = [];
    let quantidade = 0;

    separarValores(vetor, listasValoresAgrupados);
    
    //Identificando o tamanho do maior conjunto com ocorrências repetidas
    for(let i in listasValoresAgrupados){
        if(quantidade < listasValoresAgrupados[i].length){
            quantidade = listasValoresAgrupados[i].length;
        }
    }

    //Descobrindo qual é o conjunto ou quais são os conjuntos de números que mais se repetiram
    let conjutosModa = listasValoresAgrupados.filter(function(item){
        return (item.length == quantidade) ? true : false;
    })

    //Como em um conjunto todos os elementos são iguais, só precisamos imprimir o primeiro elemento do conjunto moda
    if(conjutosModa.length == 1){
        console.log('O elemento com mais frequência é ' + conjutosModa[0][0]);
    } else{
        console.log('Os elementos com mais frequência são:');
        for(let i in conjutosModa){
            console.log(conjutosModa[i][0]);
        };
    }
}

// let vetor = [1,1,7,9,7,3,3,9,7,7,1,0,2,4];
let vetor = ["maçã", "uva", "laranja","ovo", "abacaxi", "uva", "laranja", "laranja"];
calcularModa(vetor);