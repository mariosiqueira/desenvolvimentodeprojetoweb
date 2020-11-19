function getArquivo(url){
    $(function(){
        $.ajax({
            type:'GET',
            url:url,
            success:function(arquivo){
                $(arquivo).find('restaurant').each(function() {
                    
                    if($(this).attr('type') == "sitdown"){
                        $('#restaurant-list').append("<li class=\'restaurant sitdown\'>" + "Name: " + `${$(this).attr('name')}` + " - Address: " + "<a href=\'https://www.google.com/maps/place/@" + `${$(this).attr('lat')}` + "," + `${$(this).attr('lng')}` + ",17z" + "\'>" +`${$(this).attr('address')}` + "</a>" + "</li>");
                        
                    } else{
                        $('#restaurant-list').append("<li class=\'restaurant bar\'>" + "Name: " + `${$(this).attr('name')}` + " - Address: " + "<a href=\'https://www.google.com/maps/place/@" + `${$(this).attr('lat')}` + "," + `${$(this).attr('lng')}` + ",17z" + "\'>" +`${$(this).attr('address')}` + "</a>" + "</li>");
                    }
                })
            },
            error:function(){
                console.log('Erro!')
            }
        });
    });
}

getArquivo("restaurants.xml");