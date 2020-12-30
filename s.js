
jQuery(function ($) {
    $('.box').bgSwitcher({
        images: ['05.png','06.png','07.png','09.png','08.png'], // 切り替える背景画像
        Interval: 5000, //切り替えの間隔 1000=1秒
        start: true, //$.fn.bgswitcher(config)をコールした時に切り替えを開始
        loop: true, //切り替えをループする
        shuffle: false, //背景画像の順番をシャッフルする
        effect: "fade", //エフェクトの種類 (fade / blind / clip / slide / drop / hide)
        duration: 1000, //エフェクトの時間 1000=1秒
        easing: "swing", //エフェクトのイージング 
    });

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