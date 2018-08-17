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
            $(this).parent().children('.expand').show();
        }else{
            $(this).attr('attr_expand','plus');
            $(this).html('<i class="fa fa-angle-left"></i>');
            $(this).parent().children('.expand').hide();
        }
    });

    $(".a_main_cate").bind('click', function( event ) {
        var url = $(this).attr('data-url');
        window.location.href = url;
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

    // PROMOTION TYPE
    $( ".ip_checkout_promotion" ).on( "keyup", function(){
        if( !$(this).val() ) {
            $('.type_text_close').hide();
        }else{
            $('.type_text_close').show();
        }
    });
    $(".type_text_close").click(function(){
        $( ".ip_checkout_promotion" ).val('');
        $(this).hide();
    });
    $(".promotion_code_close").click(function(){
        $('.content_checkout_info_order_promo_success').hide();
    });

    // TAB PANE CHECKOUT
    $('.checkout_method_tab_item').click(function(){
        $('.checkout_method_tab_item').removeClass('checkout_tab_active');
        $('.checkout_method_tab_pane_content').removeClass('checkout_pane_active');
        $(this).addClass('checkout_tab_active');
        $( '#'+$(this).attr("attr-tab") ).addClass('checkout_pane_active');
    });

    // DATEPICKER
    $( "#datepicker" ).datepicker({
        dateFormat: 'dd-mm-yy'
    });

    // EDITINFO
    $('.info_submit_edit').click(function(){
        $(this).hide();
        $('.acc_cur').hide();
        $('.acc_editing').fadeIn(200);
    });
    $('.btn_cancel_update_info').click(function(){
        $(this).hide();
        $('.acc_editing').hide();
        $('.acc_cur').fadeIn(200);
        $('.info_submit_edit').fadeIn(200);
    });
});