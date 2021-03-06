$(function(){
    $('.text1').fadeIn(500);
    setInterval(function() {
        $('.text2').fadeIn(500);
    }, 500);
    setInterval(function() {
        $('.text3').fadeIn(500);
    }, 1000);
    setInterval(function() {
        $('.text4').fadeIn(500);
    }, 1500);
    setInterval(function() {
        $('.text5').fadeIn(500);
    }, 2000);
    setInterval(function() {
        $('.text6').fadeIn(500);
    }, 2500);


    $('.modal').click(function(){
        var $answer=$(this).find('.header-list2');
        if($answer.hasClass('open')){
            $answer.removeClass('open');
            $answer.slideUp();
          
        }
        else{
            $answer.addClass('open');
            $answer.slideDown();
        }
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

});