// Your code goes here

//custom alerts for each of the three buttons when clicked

const btn = document.querySelectorAll('.btn');

btn[0].addEventListener('click', (event) => {
    alert("You are going to the hottest place in the world!");
});

btn[1].addEventListener('click', (event) => {
    alert("You are going to the most dangerous place in the world!");
});

btn[2].addEventListener('click', (event) => {
    alert("You are going to the worst place in the world! Good luck.");
});

//changes text color when your cursor goes over it. Currently does not go 'back' to the original,


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

//below reverts the color and size to original after you move your mouse away

paras.forEach(function(item) {
    returnToBlack(item);
});

function returnToBlack(item) {
    item.addEventListener("mouseout", function(event) {
        item.style.color = "black";
        item.style.fontSize = "1.6rem";
    })};




//When the page loads, it console logs a message

window.addEventListener('load', (event) => {
    console.log('Congratulations, this page has finished loading!');
});

//hover over any image to triple its size

const images = document.querySelector("img");

images[0].addEventListener("mouseover", (event) => event.target.style.transform = "scale(3.0)");
images[0].addEventListener("mouseleave", (event) => event.target.style.transform = "scale(1.0)");

/*
//double click the footer to change the background color to dodgerblue.
//this code does not work yet

footer = document.querySelector('.footer');

footer.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = "dodgerblue";
});

//non-functioning code at the moment

const img = document.querySelectorAll('img');

img[0].addEventListener('dblclick', (event) => {
    event.target.style.width = '300%';
});

img[1].addEventListener('dblclick', (event) => {
    event.target.style.width = '200%';
});

img[2].addEventListener('dblclick', (event) => {
    event.target.style.width = '150%';
});
