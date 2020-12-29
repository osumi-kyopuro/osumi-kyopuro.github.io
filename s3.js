$(function(){
    $('.text1').fadeIn(1000);
    setInterval(function() {
        $('.text2').fadeIn(1000);
    }, 1000);
    setInterval(function() {
        $('.text3').fadeIn(1000);
    }, 2000);
    setInterval(function() {
        $('.text4').fadeIn(1000);
    }, 3000);
    setInterval(function() {
        $('.text5').fadeIn(1000);
    }, 4000);
    setInterval(function() {
        $('.text6').fadeIn(1000);
    }, 5000);

    /*$('header a').click(function () {
        var id=$(this).attr('href');
        var position=$(id).offset().top;
        $('html,body').animate({
          'scrollTop':position
        },500);
    });


*/
    

    
    
    var topBtn = $('.up-icon');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    
    $('#top-btn').click(function(){
        $('html,body').animate({ 
        'scrollTop': 0 
        }, 'slow');
    });


    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });


    $('.lesson-hover').hover(
        function() {
        // 子要素の「.text-contents」の要素を取得し、text-activeクラスをつけてください
        $(this).find('.txt-contents').addClass('text-active');
        
        },
        function() {
        // 子要素の「.text-contents」の要素を取得し、text-activeクラスを外してください
        $(this).find('.txt-contents').removeClass('text-active');
        
        }
    );
});