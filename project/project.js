
$(document).ready(function(){
    $('.jumbotron').paroller();
    $('.first').paroller();
    $('.second').paroller();
    $('.third').paroller();

    var windowWidth = window.innerWidth; //畫面寬度
    var horizontalLength = document.querySelector(".element-wrapper").scrollWidth; //wrapper有多寬
    var distFromTop = document.querySelector(".horizontal-section").offsetTop; //wrapper以上有多長
    var scrollDistance = distFromTop + horizontalLength - windowWidth; //總共要位移的長度
    
    console.log(scrollDistance);
    document.querySelector(".horizontal-section").style.height = horizontalLength + "px";

    window.onscroll = function() {
        var scrollTop = window.pageYOffset;

        //wrapper正在滾動的變化寫在這裡
        if(scrollTop >= distFromTop && scrollTop <= scrollDistance) { 
            document.querySelector(".element-wrapper").style.transform = "translateX(-"+(scrollTop - distFromTop)+"px)";//計算橫向位移
            document.getElementById("back").style.color = "#ebebe8";
        }else{
            document.getElementById("back").style.color = "#9c886e";
        }
    }
});