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

});