function getArquivo(url){
    $(function(){
        $.ajax({
            type:'GET',
            url:url,
            success:function(json){
                let pets = JSON.parse(json).pets;
                console.log(pets)
                for(let i = 0; i < pets.length; i++){
                    let linha = document.getElementById('linha').cloneNode(true);
                    let colunas = linha.querySelectorAll('td');
                    colunas[0].innerHTML = `${pets[i].name}`;
                    colunas[1].innerHTML = `${pets[i].species}`;
                    colunas[2].innerHTML = `${pets[i].price}`;
                    colunas[3].innerHTML = `${pets[i].foods.likes}`;
                    colunas[4].innerHTML = `${pets[i].foods.dislikes}`;
                    colunas[5].querySelector('img').src = `${pets[i].picture}`;
                    document.querySelector('table').appendChild(linha);
                }
            },
            error:function(){
                console.log('Erro!')
            }
        });
    });
}

getArquivo("https://raw.githubusercontent.com/humbertobeltrao/web-practice/master/ajax-pets.json");