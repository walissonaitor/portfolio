var state=0;
var pandinha = 0;

$().ready(function(){

	
    $(this).css("color", "#0f7f87");
	$('.menu').on('click', function(){
        if (state=0) {
            state=1;
        }else{
            state=0;
        }
    });
    if(state=1){
    $(".menu").css("color", "#0f7f87");

    }else{  
    $(".menu").css("color", "#000000");

    }   

$("#feedback").click(function(){
    alert("Sua mensagem foi enviada. Agradeço desde já.");
});


// $("#panda").hover(function(){

// });

$("#panda").click(function(){
    $("#panda").animate({ width:'450px',height: '350px'},"slow");
}); 





// $('#panda').mouseenter(function()
// {       
   
//     $(this).animate({width: "150%",},600);
// });

// $('#panda').mouseleave(function()
// {       
//     $(this).animate({width: "100%",},600);
// });


// $(function ()
// {
//     $('#panda').mouseover( function ()
//     {
//         $(this).width(1000);
//     });
// });


});

