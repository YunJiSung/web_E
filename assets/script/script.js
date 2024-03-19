$(".menu > ul > li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(400)
})

$(".menu > ul > li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(200)
})

$(function(){
    let index = 0

    $(".slideWrap2").append($(".slide").first().clone(true))

    setInterval(() => {
        index++;
        $(".slideWrap2").animate({marginLeft : (-300 + index * 100) + "%"});

        if (index === 3){
            setTimeout(() => {
                index = 0;
                $(".slideWrap2").animate({marginLeft : -300 + "%"})
            }, 700);
        }
    }, 3000);
})