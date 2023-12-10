# IDM Web Dev Fall 2023 FINAL PROJECT DOCUMENTATION
# The Food Lab by Taneim Miah
 
[Link to site](https://bluetitanium.github.io/IDM-Web-Dev-Fall-2023/Final/index.html)

# Project Overview
The food lab is a final project developed by Taneim Miah for NYU IDM's Web Development course in Fall 2023. This project is primarily used to teach about food chemistry, food facts, and various health information related to categories of food. The main bulk of the work I've done is research, UI design, and enhancing the UX with some slight use of vanilla JavaScript. 

[Food Lab Preview](images/preview.mp4)


# Documentation
A lot of the information that the food lab uses was researched from NYU's Intro to Foods + Food Science course and the book, Understanding Food Principles and Preparation, by Amy Brown. 
Most of the images come from Unsplash, Brittanica, Guim, and MorningChores.

For the design aspect, I've designed everything myself in [Figma](https://www.figma.com/file/JcyI50vHfCURjS2Gm9wAfi/Whiteboard---Web-Dev-Assignments?type=whiteboard&node-id=0%3A1&t=NvgpNcGTvQ0VUojD-1).

**The JavaScript plugins I've used are:**
- [Typewriter Effect](https://www.npmjs.com/package/typewriter-effect)
- [Flickity Carousels](https://flickity.metafizzy.co/)
- [Simple Parallax](https://simpleparallax.com/)

**Explanation of the HTML TAGS I've created:**
- \<header\> - Div that holds a title and subtitle for each page
- \<slidesHolder\> - Div that holds the carousel needed for the flickity carousels
- \<carousel\> \<carousel-cell\> \<carousel-image\> \<carousel-label\> - Divs that handle all of the necessary info for the carousel. I've enforced that there is an image and label for each carousel element
- \<backButton\> - Div that exists on all the content pages that is fixed and allows users to return to the home page
- \<ImageContainer\> - Div that holds a content box and an image box (for formatting)
- \<ContentBox\> - Div that holds either some sort of content, mainly text but some images too or another container
- \<TextBox\> - Div that holds text content for the page
- \<ImageBox\> - Div that holds image content for the page
- \<thumbnail\> - Div that handles the thumbnail needed for the simple parallax
- \<point\> - Div that is special and used in the text boxes in order to show a text and an image side by side
- \<RecipeContainer\> \<container\> \<item-cell\> \<item-image\> \<item-label\>- Divs that handle all of the necessary info for the recipes at the bottom of the content pages.
- \<FullImage\> - Div that makes the imagebox set to a certain height
- \<Full\> - Div that sets the box that it is in to 100% width

**Explanation of the indexScript.js file:**
```jsx
//FOR INDEX PAGE
//TYPEWRITER INFO
var app = document.getElementById('typing');
//looping
var typewriter = new Typewriter(app, {
    loop: true
});
//switch between 3 strings
typewriter.typeString('a look into the chemistry of foods')
    .pauseFor(2500)
    .deleteAll()
    .typeString('learn about food safety and inspection')
    .pauseFor(2500)
    .deleteAll()
    .typeString('find some healthy food recipes')
    .pauseFor(2500)
    .deleteAll()
    .start();
```
For the home page, the indexscript file is used to set a typewriter subtitle. The subtitle loops through 3 strings: 'a look into the chemistry of foods', 'learn about food safety and inspection', 'find some healthy food recipes'. There is a 2.5 second interval between each string typing event.

**Explanation of the myscript.js file:**
```jsx
//FOR PARALLAXED IMAGES
var images = document.getElementsByClassName('thumbnail');
new simpleParallax(images);
```
There is a simple piece of code to initialize the parallax library for all of the thumbnail elements on the content pages.
```jsx
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
```
This piece of code is for user experience on the recipe section of the content pages. Each of the item cells are found and stored in a class. There is a transform array to set the scales and y-positions of the cells. Whenever the items are hovered, the item cell will smoothly zoom in, and if it is not hovered it will go back to normal smoothly as well. To make it smooth, I use a lerp (linear interpolation) function. Since I want it to be smooth, I also set the hover check function to loop 60 times a second or every 16ms.