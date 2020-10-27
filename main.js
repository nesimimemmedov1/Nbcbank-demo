$(document).ready(function(){

    $(".toggler").click(function(){
        $(".rightmenu").css({right: "0"},);
        $(".layer").addClass("active");
    })

    $(".times").click(function(){
        $(".rightmenu").css({right:"-600px"});
        $(".layer").removeClass("active");
    });

    $(".layer").click(function(){
        $(".layer").removeClass("active");
        $(".rightmenu").css({right: "-600px"},);
    });
    

    $("#bar1").click(function(){
        $(".leftmenu-bar").animate({left: "0px"});
        $("#bar1").hide();
        $("#bar2").fadeIn("slow")
    })

    $("#bar2").click(function(){
        $(".leftmenu-bar").animate({left:"-902px"});
        $("#bar2").hide();
        $("#bar1").fadeIn("slow")
    })
    
    let menuWidth3 = $(".middle-menu ").width() + "px";

    $("#bar3").click(function(){
        $(".middle-menu ").animate({left: "0"});
        $("#bar3").hide();
        $("#bar4").fadeIn("slow")
    })

    $("#bar4").click(function(){
        $(".middle-menu ").stop().animate({left: `-${menuWidth3}`},500);
        $("#bar4").hide();
        $("#bar3").fadeIn("slow")
    })
    
    $("#bar3").click(function(){
        $(".second-section").css({overflowY:"hidden"})
    })

    $("#bar4").click(function(){
        $(".second-section").css({overflowY:"scroll"})
    })

    $(".cash").click(function(){
       $(".cash").css({left:"14px"})
       if($(".cash").css("left") == "14px"){
          $(".cash").css({left:"0px"})
       }
    })

    $(".cash-two").click(function(){
        $(".cash-two").css({left:"14px"})
        if($(".cash-two").css("left") == "14px"){
           $(".cash-two").css({left:"0px"})
        }
     })
});



 // ($(".cash").css({left:"15px"}))
        // if($(".cash").css("left") == "15px"){

        // }else(
        //     $(".cash").css({left:"0px"})
        // )