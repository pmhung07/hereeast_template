$(function () {

    $('.user_act ').click(function(){
        if( !$(this).hasClass('user_act_active') ) {
            $('.user_popup_log').fadeIn(200);
            $(this).addClass('user_act_active');
        }else{
            $('.user_popup_log').fadeOut(200);
            $(this).removeClass('user_act_active');
        }
    });

    $(document).mouseup(function(e) {
        var container_target = $(".user_popup_log");
        if (!container_target.is(e.target) && container_target.has(e.target).length === 0) 
        {
            $('.user_popup_log').fadeOut(200);
            $('.user_act').removeClass('user_act_active');
        }
    });

    $('.point_expand').click(function(){
        $('.expand').removeClass('expand_active');
        $('.expand').hide();
        $(this).empty();
        if( $(this).attr('attr_expand') == 'plus' ){
            $('.point_expand').attr('attr_expand','plus');
            $('.point_expand').html('<i class="fa fa-angle-left"></i>');
            $(this).attr('attr_expand','sub');
            $(this).html('<i class="fa fa-angle-down"></i>');
            $(this).parent().parent().children('.expand').show();
        }else{
            $(this).attr('attr_expand','plus');
            $(this).html('<i class="fa fa-angle-left"></i>');
            $(this).parent().parent().children('.expand').hide();
        }
    });

    // POPUP MENU
    $(".header_btn_menu").hover(function(){
        $('.header_popup_menu').show();
        }, function(){
        $('.header_popup_menu').hide();
    });
    $('.li_menu_root').hover(function(){

        // Check Default
        if( !$(this).children('.ul_menu_parent').children('li').hasClass('li_active') ){
            $(this).children('.ul_menu_parent').children('li').first().addClass('li_active');
            $(this).children('.ul_menu_parent').children('li').children('ul').first().addClass('ul_active');
        }

        $('.li_menu_root').removeClass('li_active');
        $('.ul_menu_parent').removeClass('ul_active');
        $(this).addClass('li_active');
        $(this).children('.ul_menu_parent').addClass('ul_active');
    })
    $('.ul_menu_parent > li').hover(function(){
        $('.ul_menu_child').removeClass('ul_active');
        $('.ul_menu_parent > li').removeClass('li_active');
        $(this).addClass('li_active');
        $(this).children('.ul_menu_child').addClass('ul_active');
    })

    // RATING TEXT
    $('.wr_rating').click(function(){
        $('.fs-dtrtcmt').fadeIn(500);
    });
    $('.fs-dtrtbot-huy').click(function(){
        $('.fs-dtrtcmt').fadeOut(500);
    });

    // COURSE VOTE STAR
    $("#rateYo_Course").rateYo({
        rating: 0,
        fullStar: true,
        starWidth: "22px",
        onChange: function (rating, rateYoInstance) {
            //rating = count nhé
        }
    });

    // INSERT COMMENT TEXTAREA
    $('.user_reply_text').click(function(){
        $(".user_reply_me").remove();
        $(this).parent().children(".append_txt_ans").append( '<div class="user_reply_me user_reply_me_course_info"><div class="user_reply_me_wrap"><div class="thumb"><img src="images/teacher1.png"></div><div class="user_name">Nguyen Mạnh</div></div><div class="user_reply_me_txt"><textarea></textarea></div></div>' );
    });

    // SCROLL TOP
    $('.course_info_cont_tab_name a').click(function(){
        var position = jQuery.attr(this, 'href').replace("/","");
        $('html, body').animate({
            scrollTop: jQuery(position).offset().top
        }, 500);
        return false;
    });
});