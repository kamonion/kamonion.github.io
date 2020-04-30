$(function(){

    // start

    $(function() {
        setTimeout(function(){
            $('.start p').fadeIn(1600);
        },500); //0.5秒後にロゴをフェードイン!
        setTimeout(function(){
            $('.start').fadeOut(500);
        },3000); //3秒後にロゴ含め真っ白背景をフェードアウト！
        setTimeout(function(){
            $('.site-title').fadeIn(1500);
        },3500);
        setTimeout(function(){
            $('.small-tomato').fadeIn(1500);
        },3500);
        setTimeout(function(){
            $('.main-visual-contents-right').fadeIn(1500);
        },4500);
    });

    // main-visual

    $('.logo').click(function(){
        $("html,body").animate({scrollTop:0});
    });

    // navbar-list

    var thisOffsetOne;

    $(window).on('load',function(){
	    thisOffsetOne = $('#section-2').offset().top;
    });

    $(window).scroll(function(){
        if( $(window).scrollTop() > $('.main-visual').outerHeight() + $('.section-1').outerHeight() - $('.logo-navbar').outerHeight()){
            // 特定の要素を超えた
            $('.logo-navbar').css('color','#fff');
            $('.navbar-list').children('a').css('color','#fff');
        } else {
            // 特定の要素を超えていない
            $('.logo-navbar').css('color','#333');
            $('.navbar-list').children('a').css('color','#333');
        }
    });

    var thisOffsetTwo;

    $(window).on('load',function(){
	    thisOffsetTwo = $('#section-3').offset().top;
    });

    $(window).scroll(function(){
        if( $(window).scrollTop() > $('.main-visual').outerHeight() + $('.section-1').outerHeight() + $('.section-2').outerHeight() - $('.logo-navbar').outerHeight()){
            // 特定の要素を超えた
            $('.logo-navbar').fadeOut(500);

        } else {
            // 特定の要素を超えていない
            $('.logo-navbar').fadeIn(500);
        }
    });

    $('#work').click(function(){
        $("html,body").animate({scrollTop:$('#section-1').offset().top});
    });

    $('#about').click(function(){
        $("html,body").animate({scrollTop:$('#section-2').offset().top});
    });

    $('#contact').click(function(){
        $("html,body").animate({scrollTop:$('#section-3').offset().top});
    });

    // menu-visual-small

    $('.image-top i').click(function(){
        if($('.collapse-bar').hasClass('open')){
            $('.collapse-bar').removeClass('open');
            $('.collapse-bar').slideUp();
        }else{
            $('.collapse-bar').addClass('open');
            $('.collapse-bar').slideDown();
        }
    });

    $('.small-work').click(function(){
        $("html,body").animate({scrollTop:$('#section-1').offset().top});
    });

    $('.small-about').click(function(){
        $("html,body").animate({scrollTop:$('#section-2').offset().top});
    });

    $('.small-contact').click(function(){
        $("html,body").animate({scrollTop:$('#section-3').offset().top});
    });

    // work

    var thisOffsetThree;

    $(window).on('load',function(){
	    thisOffsetThree = $('#section-1').offset().top;
    });

    $(window).scroll(function(){
        if( $(window).scrollTop() > $('.main-visual').outerHeight() / 2  - $('.logo-navbar').outerHeight()){
            // 特定の要素を超えた
            $('.work').fadeIn(800);

        } else {
            // 特定の要素を超えていない
            $('.work').fadeOut(800);

        }
    });

    $('.work').hover(function(){
        $(this).children('p').fadeIn(500);
    },function(){
        $(this).children('p').fadeOut(500);
    });

    // site-title-small
    
    $(function(){
        setTimeout(function(){
            $('.image-top').fadeIn(1500);
        },3500);
        setTimeout(function(){
            $('.image-bottom').fadeIn(1500);
        },3500);
    });

    // section-4

    $('.submit').click(function(){
        
        if($('.name-form input').val() == ''){
            $('.name-form p').show();
        }else{
            $('.name-form p').hide();
        }

        if($('.mail-form input').val() == ''){
            $('.mail-form p').show();
        }else{
            $('.mail-form p').hide();
        }

        if($('.phone-form input').val() == ''){
            $('.phone-form p').show();
        }else{
            $('.phone-form p').hide();
        }

        if($('.text-form textarea').val() == ''){
            $('.text-form p').show();
        }else{
            $('.text-form p').hide();
        }

        if(
            $('.name-form input').val() != '' &&
            $('.mail-form input').val() != '' &&
            $('.phone-form input').val() != '' &&
            $('.text-form textarea').val() != '' &&
            $('.text-form textarea').val() != ''
        ){
            $('.submit-correct').fadeIn();
        }

    });

});
