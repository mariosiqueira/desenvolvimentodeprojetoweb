function celsiusParaFahrenheit(celsius){
    return 1.8 * celsius + 32;
}

function celsiusParaKelvin(celsius){
    return celsius + 273.15;
}

function removerNodes(){
    document.getElementById('result').innerHTML = '';
}

function converter(){
    removerNodes();
    let celsius = parseFloat(document.getElementById('temperatura').value);
    let fahrenheit = celsiusParaFahrenheit(celsius);
    let kelvin = celsiusParaKelvin(celsius);

    
    if(celsius){
        let nodePFahrenheit = document.querySelector('#model p').cloneNode(true);
        nodePFahrenheit.innerHTML = 'Temperatura em Fahrenheit: ' + ` ${fahrenheit.toFixed(2)}` + ' F';
        document.getElementById('result').appendChild(nodePFahrenheit);

        let nodePKelvin = document.querySelector('#model p').cloneNode(true);
        nodePKelvin.innerHTML = 'Temperatura em Kelvin: ' + ` ${kelvin.toFixed(2)}` + ' K';
        document.getElementById('result').appendChild(nodePKelvin);
    }
    
}