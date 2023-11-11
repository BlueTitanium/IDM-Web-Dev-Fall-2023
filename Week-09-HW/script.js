// var classesNodeList = document.querySelectorAll(".galleryImage");
var classes = document.querySelectorAll(".galleryImage"); // Do not use a period here!




window.onload = function() {            
    function test() {
        if (document.querySelector("body > p:hover") != null) {
            console.log("hovered");
        }
        for (i = 0;i < classes.length; i++){
            if(classes[i].matches(':hover')){
                classes[i].style.transform = "scale(2)";
                classes[i].style.zIndex = 100;
            } else{
                classes[i].style.transform = "rotate("+Math.random(-5,5)+"deg)";
                classes[i].style.zIndex = 20;
            }
        }
        console.log(classes.length);
     }
     setInterval(test, 50);
}