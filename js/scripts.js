console.log("Hi! Welcome to my portfolio!")
//menu toggle for web responsive sizes
function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
    } else {
        x.classname = 'navtoggle';
    }
}