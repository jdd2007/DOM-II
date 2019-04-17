// Your code goes here

//custom alert for first button

const btn = document.querySelectorAll('.btn');

btn[0].addEventListener('click', (event) => {
    alert("You are going to the hottest place in the world!");
});

//custom alert for second button

btn[1].addEventListener('click', (event) => {
    alert("You are going to the most dangerous place in the world!");
});

//custom alert for third button

btn[2].addEventListener('click', (event) => {
    alert("You are going to the worst place in the world! Good luck.");
});

//changes text color and size when your cursor goes over it

const paras = document.querySelectorAll('p');

paras[0].addEventListener('mouseenter', (event) => {
    event.target.style.fontSize = '2rem';
    event.target.style.color = 'purple';
});

paras[1].addEventListener('mouseenter', (event) => {
    event.target.style.fontSize = '2rem';
    event.target.style.color = 'orange';
});

paras[2].addEventListener('mouseenter', (event) => {
    event.target.style.fontSize = '2rem';
    event.target.style.color = 'pink';
});

paras[3].addEventListener('mouseenter', (event) => {
    event.target.style.fontSize = '2rem';
    event.target.style.color = 'yellow';
});

paras[4].addEventListener('mouseenter', (event) => {
    event.target.style.fontSize = '2rem';
});

paras[5].addEventListener('mouseenter', (event) => {
    event.target.style.fontSize = '2rem';
    event.target.style.color = 'teal';
});

paras[6].addEventListener('mouseenter', (event) => {
    event.target.style.fontSize = '2rem';
    event.target.style.color = 'blue';
});

paras[7].addEventListener('mouseenter', (event) => {
    event.target.style.fontSize = '2rem';
    event.target.style.color = 'salmon';
});

paras[8].addEventListener('mouseenter', (event) => {
    event.target.style.fontSize = '2rem';
    event.target.style.color = 'green';
});

//reverts the color and size of text to original after you move your mouse away

paras.forEach(function(item) {
    returnToBlack(item);
});

function returnToBlack(item) {
    item.addEventListener("mouseout", function(event) {
        item.style.color = "black";
        item.style.fontSize = "1.6rem";
    })};


//console log a message when the page is loaded

window.addEventListener('load', (event) => {
    console.log('Congratulations, this page has finished loading!');
});


//hover over any image to increase its size

const images = document.querySelectorAll("img");

images.forEach ( images => {
    images.addEventListener("mouseover", (event) => event.target.style.transform = "scale(1.5)");
});


//reverts image back to orignal size after hover

images.forEach ( images => {
    images.addEventListener("mouseleave", (event) => event.target.style.transform = "scale(1.0)");
});


//console log a message when the mouse is moving

const mouseHunt = document.querySelector(".home");

mouseHunt.addEventListener("mousemove", event => {
    console.log("Your mouse is moving again!!!");
});

//changes the header to green when you click with anything except the primary (top left) button

header = document.querySelector(".main-navigation");

header.addEventListener("auxclick", (event) => {
    event.target.style.backgroundColor = "#00ff00";
});

// Right click the footer to change its background color to MediumTurquoise.

footer = document.querySelector('.footer');

footer.addEventListener('contextmenu', (e) => {e.target.style.backgroundColor = 'MediumTurquoise';});

// logs a message with a scroll

window.addEventListener("scroll", () => {
    console.log("Somebody is scrolling");
});