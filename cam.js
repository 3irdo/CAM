const slider = document.querySelector("#slider");
let cardSlider = document.querySelectorAll(".card-slider");
let CardSliderLast = cardSlider[cardSlider.length -1];

const btnRight = document.querySelector("#btn-right");
const btnLeft = document.querySelector("#btn-left");


slider.insertAdjacentElement("afterbegin", CardSliderLast);

function next() {
    let cardSliderOne = document.querySelectorAll(".card-slider")[0];
    slider.style.marginLeft = "-100%";
    slider.style.transition ="all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', cardSliderOne);
        slider.marginLeft = "-100%;";
    }, 500);
}

btnRight.addEventListener('click', function(){
    next();
})

function back() {
    let cardSlider = document.querySelectorAll(".card-slider");
    let CardSliderLast = cardSlider[cardSlider.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition ="all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', CardSliderLast);
        slider.marginLeft = "-100%;";
    }, 500);
}

btnRight.addEventListener('click', function(){
    next();
})

btnLeft.addEventListener('click', function(){
    back();
})

setInterval(function(){
    next();
}, 15000);