const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

// LOGO SLIDER FUNCTION

var $jq = jQuery.noConflict();

$jq(document).ready(function(){
    $jq('.logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

// VALUES ANIMATION
var items = document.querySelectorAll("li");

function isItemInView(item) {
    var rect = item.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
        if (isItemInView(items[i])) {
            items[i].classList.add("show");
        }
    }
}

// listen for events
window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);