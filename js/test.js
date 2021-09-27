var a = document.getElementById('ok');
let {
    transitionDuration,
    transitionDelay
} = window.getComputedStyle(a);
console.log(transitionDuration);
console.log(transitionDelay);

