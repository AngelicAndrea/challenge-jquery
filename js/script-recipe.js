

$(document).ready( function(){
   $(".js-back").show();
   $(".js-menu").hide();
    
 //Etapa 10 

 $(".js-back").on("click",function(atras){
    if (atras){
        var url = "index.html"
        $(location).attr("href",url);
    }

});

});
    