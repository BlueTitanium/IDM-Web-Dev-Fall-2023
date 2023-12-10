//for all content pages

//FOR PARALLAXED IMAGES
var images = document.getElementsByClassName('thumbnail');
new simpleParallax(images);

// to add a hover effect to the recipes
//get all of the items and set the initial transforms
var classes = document.querySelectorAll(".item-cell");
let transforms = [];
for (i = 0;i < classes.length; i++){
    transforms[i] = [1,0]; //[scale, positiony]
};


window.onload = function() {            
    function test() {
        //check for each of the items if they are being hovered
        for (i = 0;i < classes.length; i++){
            if(classes[i].matches(':hover')){
                //if hovered, zoom in
                transforms[i][0] = lerp(transforms[i][0], 2,.1);
                var scale = transforms[i][0];
                transforms[i][1] = lerp(transforms[i][1], -15/2,.1);
                var ty = transforms[i][1];
                classes[i].style.transform = "translate(0vw,"+ty+"vw) scale("+scale+")";
                classes[i].style.zIndex = 100;
            } else{
                //if not hovered, go back to normal
                transforms[i][0] = lerp(transforms[i][0], 1,.1);
                var scale = transforms[i][0];
                transforms[i][1] = lerp(transforms[i][1], 0,.1);
                var ty = transforms[i][1];
                classes[i].style.transform = "translate(0vw,"+ty+"vw) scale("+scale+")";
                classes[i].style.zIndex = 20;
            }
        }
     }
     //loop 60fps
     setInterval(test, 16);
}

//smooth linear interpolation function
function lerp( a, b, alpha ) {
    return a + alpha * ( b - a );
}