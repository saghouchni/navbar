

$(window).ready(function(){
    $('.g').hide(50);
    $('#r').hover(function(){

        
        $('.g').css({
 
            'display':'block',
            'height':'40px',
            'left':'300px'
        });
        $('.g').show(1000);
        $('#h').css('display','inlineBlock');
    });
    $('.g').onmouseout(function(){
        $('#h').fadeOut(1000);
    });
    $('.ios').css({
'position':'absolute',
        'marginTop':'-=40px',
    });
     
     
});
$('#close').click(function(){
    $('.g').fadeOut(1000);
});