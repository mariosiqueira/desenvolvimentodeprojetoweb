function getArquivo(url){
    $(function(){
        $.ajax({
            type:'GET',
            url:url,
            success:function(arquivo){
                $(arquivo).find('catalog book').each(function() {
                    $('#book-list').append("<li class=\'author\'>" + `${$(this).find('author').text()}` + "</li>")
                    $('#book-list').append("<li class=\'title\'>" + `${$(this).find('title').text()}` + "</li>")
                })
            },
            error:function(){
                console.log('Erro!')
            }
        });
    });
}

getArquivo("books.xml");