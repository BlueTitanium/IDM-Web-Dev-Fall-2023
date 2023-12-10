var app = document.getElementById('typing');

var typewriter = new Typewriter(app, {
    loop: true
});

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