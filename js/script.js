$(".menu").hover(
    function () {
        // over
        $(".sub-menu").stop().slideDown("slow");
    }, function () {
        // out
        $(".sub-menu").stop().slideUp("fast");
    }
);