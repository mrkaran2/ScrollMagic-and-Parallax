// Initialize a new controller for ScrollMagic that handles all the animations
var controller = new ScrollMagic.Controller();

var myNav = document.getElementById("stick");

var sceneNav = new ScrollMagic.Scene({
        triggerElement: '#trigger2'
    }).setClassToggle(myNav, "zap")
    //.addIndicators({name: "Show Nav Bar"})
    .addTo(controller);

var scenePin = new ScrollMagic.Scene({
        triggerElement: '#trigger2',
        triggerHook: 0.4,
        duration: '70%'
    })
    .setPin('#trigger2', {
        pushFollowers: true
    })
    //.addIndicators({name: "Object Pin"})
    .addTo(controller);

var parallax = new TimelineLite()
    .from('.container', 1, {
        opacity: 0
    }, 0.1)
    .from('.bg', 1, {
        y: '-70%',
        ease: Power0.easeNone
    }, 0);

var paralaxScroll = new ScrollMagic.Scene({
        triggerElement: '.bgParallax',
        triggerHook: 1,
        duration: '200%'
    })
    .setTween(parallax)
    .addTo(controller);


var floats = document.getElementsByClassName('floating');

var tl = new TimelineLite()
    .staggerTo(floats, 1, {
        y: 0,
        opacity: 1
    }, 0.1);

var sceneFloat = new ScrollMagic.Scene({
        triggerElement: '#trigger2',
        triggerHook: 0.5
    })
    .setTween(tl)
    //.addIndicators({name: "Floating Objects"})
    .addTo(controller);

$('#stick').click(function () {
    $('html,body').animate({
        scrollTop: $('#trigger3').offset().top
    }, 1500);
    $('#f1').slideToggle(200);
});