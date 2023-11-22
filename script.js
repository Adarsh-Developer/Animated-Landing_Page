// SMooth Scrolling through Locomotive
// const scroll = new LocomotiveScroll({
//   el: document.querySelector('.main__container'),
//   smooth: true
// });

// Animation using GSAP
gsap.from('.nav__links', {
  stagger: 0.2,
  duration: 1,
  ease: Power3,
  y: 10,
  opacity: 0,
});

gsap.from('.home', {
  stagger: 0.3,
  y: 50,
  opacity: 0,
  ease: Expo,
  duration: 1,
  delay: 0.1,
});

// Shery JS animations
Shery.textAnimate(".home__mid .heading h1", {
  style: 2,
  y: 10,
  delay: 0.5,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

Shery.imageEffect(".home__mid img", {
  style: 3,
  config: {"uFrequencyX":{"value":11.45,"range":[0,100]},"uFrequencyY":{"value":4.58,"range":[0,100]},"uFrequencyZ":{"value":45.04,"range":[0,100]},"geoVertex":{"range":[1,64],"value":18.7},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.5,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
});

Shery.imageEffect(".imganime", {
  style: 5,
  config: {"a":{"value":1.6,"range":[0,30]},"b":{"value":-0.68,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.4,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}, 
});

// Creating a GSAP Timeline...
let tl = gsap.timeline()

tl.from(".home__mid img", {
  y: 150,
  duration: 1,
  ease: Expo.easeInOut,
  delay: 0.75,
});
tl.from(".home__mid img", {
  z: -3,
  ease: Expo.easeInOut,
  duration: 1,
})

Shery.imageEffect(".imgChange", {
  style: 5,
  gooey: true,
  config: {"a":{"value":0.69,"range":[0,30]},"b":{"value":-0.92,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.75},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.92,"range":[1,15]},"durationOut":{"value":0.55,"range":[0.1,5]},"durationIn":{"value":1.52,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.37,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":0},"noise_speed":{"value":0.76,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":34}},"discard_threshold":{"value":0.67,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.43,"range":[0,2]},"noise_scale":{"value":10.69,"range":[0,100]}},
})

const button = document.querySelector(".btn1")

button.addEventListener("mouseenter", function(){
  gsap.to(".video1", {
    opacity: 1,
    duration: 1,
    ease: Power4,
  })
})
button.addEventListener("mouseleave", function(){
  gsap.to(".video1", {
    opacity: 0,
    duration: 1,
    ease: Power4,
  })
})