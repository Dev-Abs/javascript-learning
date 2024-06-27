
// // console.log('Hello World!');
// // document.body.style.backgroundColor = 'lightblue'
// // let box1 = document.getElementById('box1');
// // console.log(box1);

// // let boxes = document.getElementsByClassName('box');
// // // console.dir(boxes)
// // console.log(boxes);

// // let p = document.getElementsByTagName('p');
// // console.dir(p[0])

// // p[0].style.color = 'red';
// // p[1].style.backgroundColor = 'lightblue';

// //query selector

// let p1 = document.querySelector('p');
// console.dir(p1);


// let pAll = document.querySelectorAll('p');
// console.dir(pAll); // returns a NodeList


// //classList
// let boxes2 = document.querySelectorAll('.box');
// console.dir(boxes2); // returns a NodeList

// // query selector for id

// let box1 = document.querySelector('#box1');
// console.dir(box1); //returns an element


// // Properties and Methods
// // tag name

// console.log(p1.tagName);

// // innerHTML
// console.log(p1.innerHTML);

// // textContent
// console.log(p1.textContent); //returns the visible text and all its children and text and  hidden text

// // innerText
// console.log(p1.innerText); //returns the visible text and all its children

// // style
// console.dir(p1.style);

// console.log(document.body.firstElementChild);


// let div = document.body.querySelector('div');
// console.dir(div.innerText);
// // div.innerHTML = '<h1> Hello World </h1>';

// let h1 = document.body.querySelector('h1');

// console.log(h1.textContent);
// console.log(h1.innerText);


// let h2 = document.querySelector('h2');

// // h2.append(' from Apna College students');

// // concatenate
// h2.innerHTML += ' from Apna College students 2';

// let divs = document.getElementsByClassName('box');

// for (let i = 0; i < divs.length; i++) {
//     divs[i].innerText = 'Hello World ' + i;
// }


// // get attribute

// let a = document.querySelector('a');
// let h11 = document.querySelector('h1');
// // console.log(h11.getAttribute('style'));

// // set attribute

// h11.setAttribute('style', 'color: red; background-color: lightblue;');
// style = console.log(h11.getAttribute('style'));

// h11.style.fontSize = "50px"; 


// let newBtn = document.createElement('button');
// newBtn.innerText = 'Click Me';
// newBtn.style.backgroundColor = 'blue';
// newBtn.style.color = 'red';
// newBtn.style.fontSize = '20px';
// newBtn.style.padding = '10px';
// newBtn.style.border = 'none';
// newBtn.style.borderRadius = '5px';
// newBtn.style.cursor = 'pointer';
// newBtn.style.margin = '10px';
// newBtn.style.display = 'block';
// newBtn.style.width = '100px';
// newBtn.style.textAlign = 'center';
// newBtn.style.textDecoration = 'none';
// newBtn.style.textTransform = 'uppercase';
// newBtn.style.fontWeight = 'bold';
// newBtn.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
// newBtn.style.transition = 'all 0.3s ease';
// newBtn.style.outline = 'none';
// newBtn.style.userSelect = 'none';
// h11.appendChild(newBtn);
// h11.prepend(newBtn);
// h11.before(newBtn);
// h11.after(newBtn);


// let newHeading = document.createElement('h1');
// newHeading.innerHTML = '<i>Hello World</i>';
// newHeading.style.color = 'green';
// newHeading.style.fontSize = '30px';
// h11.before(newHeading);

// let newp = document.createElement('p');
// newp.innerText = 'This is a new paragraph';
// newp.style.color = 'blue';
// newp.style.fontSize = '20px';
// h11.after(newp);
// newp.setAttribute('class', 'new-paragraph');
// newp.classList.add('new-paragraph2');

// // Event handling in js

// let btn = document.querySelector('button');
// btn.addEventListener('click', function() {
//     console.log('Button clicked');
//     console.log('Button clicked again');
//     console.log('Button clicked again and again');
// });

// btn.addEventListener('mouseover', function() {
//     console.log('Mouse over');
// });

// btn.addEventListener('mouseout', function() {
//     console.log('Mouse out');
// });

// btn.addEventListener('mouseenter', function() {
//     console.log('Mouse enter');
// });

// btn.addEventListener('mouseleave', function() {
//     console.log('Mouse leave');
// });

// btn.addEventListener('dblclick', function(e) {
//     console.log('Double click');
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.tagName);
//     console.log(e.target.style);
//     console.log(e.target.style.backgroundColor);
//     e.target.style.backgroundColor = 'green';
// });

// btn.addEventListener('contextmenu', function() {
//     console.log('Context menu');
// });

// // remove event listener

// let btn2 = document.querySelector('button');
// function clickHandler() {
//     console.log('Button clicked');
// }

// btn2.addEventListener('click', clickHandler);

// btn2.removeEventListener('click', clickHandler);


// // light-dark mode

// btn1.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
// });



// let darkBtn = document.querySelector('.dark-btn');
// let lightBtn = document.querySelector('.light-btn');
// let body = document.body;

// darkBtn.addEventListener('click', function() {
//     body.style.backgroundColor = 'black';
//     body.style.color = 'white';
// }
// );   

// lightBtn.addEventListener('click', function() {
//     body.style.backgroundColor = 'white';
//     body.style.color = 'black';
// }
// );


// light-dark toggle

let toggleBtn = document.createElement('button');
toggleBtn.innerText = 'Toggle';
document.body.prepend(toggleBtn);
toggleBtn.style.backgroundColor = 'blue';
toggleBtn.style.color = 'white';
toggleBtn.style.border = 'none';
toggleBtn.style.padding = '10px';
toggleBtn.style.borderRadius = '5px';
toggleBtn.style.cursor = 'pointer';
toggleBtn.style.margin = '10px';
toggleBtn.style.display = 'block';
toggleBtn.style.width = '100px';
toggleBtn.style.textAlign = 'center';
toggleBtn.style.textDecoration = 'none';
toggleBtn.style.textTransform = 'uppercase';
toggleBtn.style.fontWeight = 'bold';
toggleBtn.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
toggleBtn.style.transition = 'all 0.3s ease';
toggleBtn.style.outline = 'none';
toggleBtn.style.userSelect = 'none';

let body = document.body;
toggleBtn.addEventListener('click', function() {
    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    } else {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }
});
