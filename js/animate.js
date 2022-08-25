// 片頭動畫

document.addEventListener("DOMContentLoaded",function(){

    // var container = document.getElementById("container");

    var tl = gsap.timeline();

    
    tl.from("#logo",{duration:2.5,opacity:0, scale:0.3, ease:"back"}) //logo動畫
      // .getProperty("container","height","100","vh")
      .to('.text-reveal',{clipPath:'polygon(0 0, 100% 0%, 100% 100%, 0 100%)',stagger:.3, duration:1},"-=2.8")//logo動畫
      // .getProperty("container","height","auto")
      .from(".popup",{opacity:0 , duration:1 ,backgroundColor:"#F5F5F5"})//一進來的東西顯示
      .from("header",{opacity:0 , duration:1},"-=1") //navbar顯示
      .to('.text-reveal',{opacity:0})
      .to("#logo",{opacity:0})//logo動畫隱藏
      .from("#pointer",{opacity:0,duration:1})//scroll動畫
});
