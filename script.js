const BIKE_CARDS = [
    {
        img: "./asserts/img-car-1.png",
        paragraph: "O cambio de seis marchas da Scooter Eletrica Voltz EV1 oferece maior confiança na pilotagem",
        name: "Scooter Eletrica Voltz EV1"
    },
    {
        img: "./asserts/img-car-1.png",
        paragraph: "O cambio de seis marchas da CBX500 oferece maior confiança na pilotagem",
        name: "Honda CB500x"
    }
];

let carousel_li = document.querySelectorAll('.carousel-cards li'); 
let fisrtcard = document.querySelector('#card');
let index = 0;
let variation = 1;

function slide(value) {
    if ((value === 1) && (index === carousel_li.length - 1)) {
        index = -1; 
    }
    if ((value === -1) && (index === 0)) {
        index = carousel_li.length; 
    }

    index = value ? (index + value) : (index + variation);
    fisrtcard.style.marginLeft = `-${index * 540}px`;
}


setInterval(() => {
    slide(1); 
}, 3000);