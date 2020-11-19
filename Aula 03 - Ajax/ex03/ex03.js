let nomes = []

function getArquivo(url){
    $(function(){
        $.ajax({
            type:'GET',
            url:url,
            success:function(arquivo){
                $(arquivo).find('food').each(function() {
                    let nome = $(this).find('name').text();
                    nomes.push(nome);
                    
                })
                for(let i = 0; i < nomes.length; i++){
                    let linha = document.getElementById('linha').cloneNode(true);
                    let colunas = linha.querySelectorAll('td');
                    colunas[0].innerHTML = `${i}`;
                    colunas[1].innerHTML = `${nomes[i]}`;
                    document.querySelector('table').appendChild(linha);
                }
            },
            error:function(){
                console.log('Erro!');
            }
        });
    });
}

getArquivo('nutrition.xml');