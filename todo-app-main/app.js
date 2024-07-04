// let note = document.createElement('div');
// note.innerHTML = `<i class="fa-regular fa-circle"></i>
//           <p>i am new note</p>
//           <img src="images/icon-cross.svg" alt="" />`;

// note.classList.add('note');
// notes.appendChild(note);

let notes = document.getElementsByClassName("notes")[0];
let enter = document.getElementById("enter");
let input = document.getElementById("entertext");
let toggle = document.getElementById("toggle");

let image = document.getElementsByClassName("image")[0];


toggle.addEventListener("click", function () {
  if (toggle.classList.contains("moon")) {
    console.log("clicked")
    image.src = "images/icon-sun.svg";
    toggle.classList.remove("moon");
    toggle.classList.add("sun");
    document.body.style.backgroundColor = "hsl(235, 21%, 11%)";
    document.body.style.color = "white";
    notes.style.backgroundColor = "hsl(235, 24%, 19%)";
    notes.style.color = "white";
  } else {
    image.src = "images/icon-moon.svg";
    toggle.classList.remove("sun");
    toggle.classList.add("moon");
    document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
    document.body.style.color = "black";
    notes.style.backgroundColor = "white";
    notes.style.color = "black";
  }
});

let left = document.getElementById("left");
let itemsCount = 0;
enter.addEventListener("click", function () {
  let note = document.createElement("div");
    itemsCount++;
    left.innerHTML = `${itemsCount} items left`;
  note.innerHTML = `<i class="fa-regular fa-circle check"></i>
            <p>${input.value}</p>
            <img class="cross" src="images/icon-cross.svg" alt="" />`;
  note.classList.add("note");
  notes.appendChild(note);
  input.value = "";
});

let check = document.getElementsByClassName("check");
console.log(check);
// when check is clicked, check image should replace it and line-through the text


let cross = document.getElementsByClassName("cross");
console.log(cross);

// when cross is clicked, the note should be removed

notes.addEventListener("click", function (e) {
  let target = e.target;
  console.log(target);
  if (target.classList.contains("check")) {
    target.classList.remove("fa-circle");
    target.classList.remove("check");
    target.classList.add("fa-check-circle");
    target.nextElementSibling.style.textDecoration = "line-through";
  } else if (target.classList.contains("fa-check-circle")) {
    target.classList.remove("fa-check-circle");
    target.classList.add("fa-circle");
    target.classList.add("check");
    console.log('tick clicked')
    target.nextElementSibling.style.textDecoration = "none";
  } else if (target.classList.contains("cross")) {
    target.parentElement.remove();
    itemsCount--;
    left.innerHTML = `${itemsCount} items left`;
  }
});


let right = document.getElementById("right");

right.addEventListener("click", function (e) {
    notes.innerHTML = '';
    itemsCount = 0;
    left.innerHTML = `${itemsCount} items left`;
});
