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