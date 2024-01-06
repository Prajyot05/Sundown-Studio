const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4Animation(){
    var elemC = document.querySelector("#elem-container");
    var fix = document.querySelector("#fixed-image")

    elemC.addEventListener("mouseenter", function(){
        fix.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function(){
        fix.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function(e){
        e.addEventListener("mouseenter", function(i){
            var image = e.getAttribute("data-image");
            fix.style.backgroundImage = `url(${image})`;
        })
    })
}

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        // centeredSlides: true,
        spaceBetween: 50,
    });
}

function loaderAnimation(){
    var loader = document.querySelector("#loader");
    setTimeout(() => {
        loader.style.top = "-100%";
    }, 4000);
}

page4Animation();
swiperAnimation();
loaderAnimation();