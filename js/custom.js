$(function(){
    // BACK -TO-TOP
    
    $('.back-to-top').click(function(){
        $('html,body').animate({scrollTop:0},1000)
    });
    $(window).scroll(function(){
        var scrolling=$(this).scrollTop();

        if(scrolling>300){
            $('.back-to-top').fadeIn(500);
        }
        else{
            $('.back-to-top').fadeOut(500);
        }
        if(scrolling>100){
            $('.navbar').addClass('bg') 
            }
            else{
                $('.navbar').removeClass('bg')
            }
    })
    // counter up part start js
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    // counter up part end js
    // video pup up start
    $('.venobox').venobox();
     // video pup up start
});