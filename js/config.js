/*
Zone Template
*/
jQuery(function(){
    $ = jQuery ;
    //mobile menu and desktop menu
    $("#mobile_menu_list").css({"right":-1500});
    $("#mobile_menu").click(function(){
            $("#mobile_menu_list").show();
            $("#mobile_menu_list").animate({"right":0});
            return false;
    });
    $(window).on("load resize scroll", function(){
            if($(window).width()>768){
                $("#mobile_menu_list").css({"right":-1500});
            }
            $("#mobile_menu_list").height($(window).height());
    });
    //click on outside of mobile menu, hide mobile menu
    $.mobile_menu_list_hover = false;
    $("#mobile_menu_list").hover(function(){
        $.mobile_menu_list_hover = true;
    },function(){
        $.mobile_menu_list_hover = false;
    });
    $("body").click(function(){
        if($.mobile_menu_list_hover == false){
                $("#mobile_menu_list").animate({"right":-1500});
        }
    })
    //fancybox
    $(".fancybox_img").fancybox();
});