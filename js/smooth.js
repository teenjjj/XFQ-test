
// 還沒理解的滑動效果
document.addEventListener("DOMContentLoaded",function(){
    const body = document.body,
        scrollWrap = document.getElementsByClassName("smooth-scroll")[0],
        height = scrollWrap.getBoundingClientRect().height -1,
        speed = 0.05;

    var offset = 0;


    body.style.height = Math.floor(height)+"px";


    function smoothScroll() {
        offset += (window.pageYOffset - offset) * speed;

        var scroll = "translateY(-" + offset + "px) translateZ(0)";
        scrollWrap.style.transform = scroll;

        callScroll = requestAnimationFrame(smoothScroll);
    }

    smoothScroll();
});



   