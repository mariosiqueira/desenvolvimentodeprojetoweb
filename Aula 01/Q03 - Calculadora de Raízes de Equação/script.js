function calcularDelta(a, b, c){
    return b * b - 4 * a * c;
}

function removerNodes(){
    document.getElementById('delta').innerHTML = '';
    document.getElementById('raizes').innerHTML = '';
}

function calcularRaizes(){
    removerNodes();
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);

    a = (a) ? a : 0;
    b = (b) ? b : 0;
    c = (c) ? c : 0;

    let delta = calcularDelta(a, b, c);

    if(a > 0){
        let x1 = (-b + Math.sqrt(delta))/(2 * a);
        let x2 = (-b - Math.sqrt(delta))/(2 * a);

        
        let nodeDelta = document.querySelector('#model p').cloneNode(true);
        nodeDelta.innerHTML = 'Δ' + ' = ' + delta;
        document.getElementById('delta').appendChild(nodeDelta);

        if(delta >= 0){
            let nodeX1 = document.querySelector('#model p').cloneNode(true);
            let nodeX2 = document.querySelector('#model p').cloneNode(true);

            nodeX1.innerHTML = 'x\'' + ' = ' + x1;
            nodeX2.innerHTML = 'x\'\'' + ' = ' + x2;

            document.getElementById('raizes').appendChild(nodeX1);
            document.getElementById('raizes').appendChild(nodeX2);
        }else{
            let nodeP = document.querySelector('#model p').cloneNode(true);
            nodeP.innerHTML = 'Como o valor de Δ é negativo, x ∉ ℝ';
            document.getElementById('raizes').appendChild(nodeP);
        }
    } else{
        let nodeDelta = document.querySelector('#model p').cloneNode(true);
        nodeDelta.innerHTML = 'Δ' + ' = ' + delta;
        document.getElementById('delta').appendChild(nodeDelta);

        if(b != 0){
            let x = -c/b;
            let nodeX = document.querySelector('#model p').cloneNode(true);
            nodeX.innerHTML = 'x' + ' = ' + x;
            document.getElementById('raizes').appendChild(nodeX);
        } else{
            let nodeX = document.querySelector('#model p').cloneNode(true);
            c != 0 ? nodeX.innerHTML = '∄ x ∈ ℝ' : nodeX.innerHTML = 'O valor de x é indeterminado.';
            document.getElementById('raizes').appendChild(nodeX);
        }
        
    }
    
}