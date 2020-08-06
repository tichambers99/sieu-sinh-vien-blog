$(document).ready(function () {
    $(".click-scroll").click(function (e) { 
        e.preventDefault();
        let x = $(this).attr("data-name");
        console.log(x);
        let y =  $(`.hr_me[data-hr=${x}]`).offset().top;

        $("body,html").animate({scrollTop: y}, 1000);
    });
    
    $("#scroll-header").click(function(e){
        e.preventDefault();
        $("body, html").animate({scrollTop: 0}, 1000);
    })

    $(window).scroll(function () { 
        returnHeaders();
    });
    
    function returnHeaders(){
        let x = $("body, html").scrollTop();
        if(x >= 500){
            // $("#scroll-header").addClass("show");
            $("#scroll-header").css("display", "block");
            // console.log("hihi");
            
        }else{
            $("#scroll-header").css("display", "none");
            // $("#scroll-header").removeClass("show");
            // console.log("haha");
            
        }
    }
   
});




