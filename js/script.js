/*
CREATE A CAROUSEL TO SHOW DIFFERENT PLACES AND DESCRIPTION
1. create a cycle to get element inside html
*/

//arrays
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

//variables 
const carousel = document.getElementById('carousel');
const thumbs = document.getElementById('thumbs');
const nextThumb = document.querySelector(".arrow.next");
const prevThumb = document.querySelector(".arrow.prev");

let item = "";
let thumb = "";

//cycles to get elements inside the html file
for(i = 0; i < items.length; i++) {
    
    item += `
    <div class="item">
        <img src="${items[i]}" alt="${title[i]}">
        <div class="text">
            <h3> ${title[i]} </h3>
            <p> ${text[i]} </p>
        </div>
    </div>`;

    
    thumb += `
        <div class="thumb">
            <img src="${items[i]}" alt="${title[i]}">
        </div>`
}


//"create variables to get a pseudo array"
let activePos = 0

carousel.innerHTML += item;
document.getElementsByClassName('item')[activePos].classList.toggle('active');

thumbs.innerHTML += thumb;
document.getElementsByClassName('thumb')[activePos].classList.toggle('active');


//event to click arrows and change selected thumb and item
document.querySelector(".arrow.next").addEventListener('click',
function(){
    if(activePos < 4){
        ++activePos;
        document.querySelector('.item.active').classList.toggle("active");
        document.getElementsByClassName('item')[activePos].classList.toggle('active');
        
        document.querySelector('.thumb.active').classList.toggle("active");
        document.getElementsByClassName('thumb')[activePos].classList.toggle('active');
    }else if (activePos === 4){
        activePos = 0;
        document.querySelector('.item.active').classList.toggle("active");
        document.getElementsByClassName('item')[activePos].classList.toggle('active');
        
        document.querySelector('.thumb.active').classList.toggle("active");
        document.getElementsByClassName('thumb')[activePos].classList.toggle('active');
    }
})

//event to click arrows and change selected thumb and item
document.querySelector(".arrow.prev").addEventListener('click',
function(){
    if(activePos > 0){
        --activePos;
        document.querySelector('.item.active').classList.toggle("active");
        document.getElementsByClassName('item')[activePos].classList.toggle('active');
        
        document.querySelector('.thumb.active').classList.toggle("active");
        document.getElementsByClassName('thumb')[activePos].classList.toggle('active');
    }else if (activePos === 0){
        activePos = 4;
        document.querySelector('.item.active').classList.toggle("active");
        document.getElementsByClassName('item')[activePos].classList.toggle('active');
        
        document.querySelector('.thumb.active').classList.toggle("active");
        document.getElementsByClassName('thumb')[activePos].classList.toggle('active');
    }
})
