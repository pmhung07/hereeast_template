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

});