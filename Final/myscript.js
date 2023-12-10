var images = document.getElementsByClassName('thumbnail');
new simpleParallax(images);

// var classesNodeList = document.querySelectorAll(".galleryImage");
var classes = document.querySelectorAll(".item-cell");
let transforms = [];
for (i = 0;i < classes.length; i++){
    transforms[i] = [1,0];
};


window.onload = function() {            
    function test() {
        if (document.querySelector("body > p:hover") != null) {
            console.log("hovered");
        }
        for (i = 0;i < classes.length; i++){
            if(classes[i].matches(':hover')){
                transforms[i][0] = lerp(transforms[i][0], 2,.1);
                var scale = transforms[i][0];
                transforms[i][1] = lerp(transforms[i][1], -15/2,.1);
                var ty = transforms[i][1];
                classes[i].style.transform = "translate(0vw,"+ty+"vw) scale("+scale+")";
                classes[i].style.zIndex = 100;
            } else{
                transforms[i][0] = lerp(transforms[i][0], 1,.1);
                var scale = transforms[i][0];
                transforms[i][1] = lerp(transforms[i][1], 0,.1);
                var ty = transforms[i][1];
                classes[i].style.transform = "translate(0vw,"+ty+"vw) scale("+scale+")";
                classes[i].style.zIndex = 20;
            }
        }
        console.log(classes.length);
     }
     setInterval(test, 16);
}

function lerp( a, b, alpha ) {
    return a + alpha * ( b - a );
}