// Your code goes here


const btn = document.querySelectorAll('.btn');

//custom alerts for each of the three buttons when clicked

btn[0].addEventListener('click', (event) => {
    alert("You are going to the hottest place in the world!");
});

btn[1].addEventListener('click', (event) => {
    alert("You are going to the most dangerous place in the world!");
});

btn[2].addEventListener('click', (event) => {
    alert("You are going to the worst place in the world! Good luck.");
});



const img = document.querySelectorAll('img');

//non-functioning code at the moment

img[0].addEventListener('dblclick', (event) => {
    event.target.style.width = '300%';
});

img[1].addEventListener('dblclick', (event) => {
    event.target.style.width = '200%';
});

img[2].addEventListener('dblclick', (event) => {
    event.target.style.width = '150%';
});





const paras = document.querySelectorAll('p');

//changes text color when your cursor goes over it. Currently does not go 'back' to the original,

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