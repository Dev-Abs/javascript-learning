let step1btn = document.getElementById('step1btn');
let step2btn = document.getElementById('step2btn');
let step3btn = document.getElementById('step3btn');
let step4btn = document.getElementById('step4btn');

let step1 = document.getElementsByClassName('step1')[0];
let step2 = document.getElementsByClassName('step2')[0];
let step3 = document.getElementsByClassName('step3')[0];
let step4 = document.getElementsByClassName('step4')[0];
let step5 = document.getElementsByClassName('step5')[0];

let one = document.getElementsByClassName('one')[0];
let two = document.getElementsByClassName('two')[0];
let three = document.getElementsByClassName('three')[0];
let four = document.getElementsByClassName('four')[0];


let goback1 = document.getElementById('goback1');
let goback2 = document.getElementById('goback2');
let goback3 = document.getElementById('goback3');


goback1.addEventListener('click', function() {
    step2.classList.add('hidden');
    step2.classList.remove('flex');
    step1.classList.add('flex');
    step1.classList.remove('hidden');

    one.classList.add('bg-[#bfe2fd]');
    one.classList.add('text-black');
    two.classList.remove('text-black');
    two.classList.add('text-white');
    two.classList.add('border-white');
    two.classList.add('border-2');
    two.classList.remove('bg-[#bfe2fd]');
    one.classList.remove('border-white');
    one.classList.remove('border-2');
});

goback2.addEventListener('click', function() {
    step3.classList.add('hidden');
    step3.classList.remove('flex');
    step2.classList.add('flex');
    step2.classList.remove('hidden');

    two.classList.add('bg-[#bfe2fd]');
    two.classList.add('text-black');
    three.classList.remove('text-black');
    three.classList.add('text-white');
    three.classList.add('border-white');
    three.classList.add('border-2');
    three.classList.remove('bg-[#bfe2fd]');
    two.classList.remove('border-white');
    two.classList.remove('border-2');
});

goback3.addEventListener('click', function() {
    step4.classList.add('hidden');
    step4.classList.remove('flex');
    step3.classList.add('flex');
    step3.classList.remove('hidden');

    three.classList.add('bg-[#bfe2fd]');
    three.classList.add('text-black');
    four.classList.remove('text-black');
    four.classList.add('text-white');
    four.classList.add('border-white');
    four.classList.add('border-2');
    four.classList.remove('bg-[#bfe2fd]');
    three.classList.remove('border-white');
    three.classList.remove('border-2');
});



step1btn.addEventListener('click', function() {
    step1.classList.add('hidden');
    step1.classList.remove('flex');
    step2.classList.add('flex');
    step2.classList.remove('hidden');

    two.classList.add('bg-[#bfe2fd]');
    two.classList.add('text-black');
    one.classList.remove('text-black');
    one.classList.add('text-white'); 
    one.classList.add('border-white');
    one.classList.add('border-2');
    one.classList.remove('bg-[#bfe2fd]');
    two.classList.remove('border-white');
    two.classList.remove('border-2');
});

step2btn.addEventListener('click', function() {
    step2.classList.add('hidden');
    step2.classList.remove('flex');
    step3.classList.add('flex');
    step3.classList.remove('hidden');

    three.classList.add('bg-[#bfe2fd]');
    three.classList.add('text-black');
    two.classList.remove('text-black');
    two.classList.add('text-white');
    two.classList.add('border-white');
    two.classList.add('border-2');
    two.classList.remove('bg-[#bfe2fd]');
    three.classList.remove('border-white');
    three.classList.remove('border-2');
});

step3btn.addEventListener('click', function() {
    step3.classList.add('hidden');
    step3.classList.remove('flex');
    step4.classList.add('flex');
    step4.classList.remove('hidden');

    four.classList.add('bg-[#bfe2fd]');
    four.classList.add('text-black');
    three.classList.remove('text-black');
    three.classList.add('text-white');
    three.classList.add('border-white');
    three.classList.add('border-2');
    three.classList.remove('bg-[#bfe2fd]');
    four.classList.remove('border-white');
    four.classList.remove('border-2');

    console.log(totalText)
    let total = onlinecost + largercost + profilecost ;
    console.log(total);
});

step4btn.addEventListener('click', function() {
    step4.classList.add('hidden');
    step4.classList.remove('flex');
    step5.classList.add('flex');
    step5.classList.remove('hidden');

    four.classList.remove('bg-[#bfe2fd]');
    four.classList.remove('text-black');
    four.classList.add('border-white');
    four.classList.add('border-2');
});


let toggle = document.querySelector('#toggle input');
let arcadetext = document.getElementById('arcadetext');
let advancetext = document.getElementById('advancedtext');
let protext = document.getElementById('protext');
let label = document.getElementById('toggle');

let arcade = document.querySelector('.arcade');
let advance = document.querySelector('.advanced');
let pro = document.querySelector('.pro');

let monthBool = true;
let yearBool = false;

toggle.addEventListener('change', function () {
    if (label.classList.contains('notchecked')) {
        arcadetext.innerText = '$90/yr';
        advancetext.innerText = '$120/yr';
        protext.innerText = '$150/yr';

        arcadeCost = 90;
        advanceCost = 120;
        proCost = 150;

        yearBool =true;
        monthBool = false;

        label.classList.remove('notchecked');
        label.classList.add('checked');
    } 
    else if (label.classList.contains('checked')) {
        arcadetext.innerText = '$9/mo';
        advancetext.innerText = '$12/mo';
        protext.innerText = '$15/mo';

        arcadeCost = 9;
        advanceCost = 12;
        proCost = 15;

        monthBool = true;
        yearBool = false;


        label.classList.remove('checked');
        label.classList.add('notchecked');
}
});

let arcadeCost = 0;
let advanceCost = 0;
let proCost = 0;
let totalText = '';



arcade.addEventListener('click', function() {
    arcade.classList.add('active');
    advance.classList.remove('active');
    pro.classList.remove('active');

    if (monthBool){
        totalText = 'Arcade (Monthly)'
    }

    if (yearBool){
        totalText = 'Arcade (Yearly)'
    }
});

advance.addEventListener('click', function() {
    advance.classList.add('active');
    arcade.classList.remove('active');
    pro.classList.remove('active');
    
    if (monthBool){
        totalText = 'Advanced (Monthly)'
    }

    if (yearBool){
        totalText = 'Advanced (Yearly)'
    }
});

pro.addEventListener('click', function() {
    pro.classList.add('active');
    advance.classList.remove('active');
    arcade.classList.remove('active');
    
    if (monthBool){
        totalText = 'Pro (Monthly)'
    }

    if (yearBool){
        totalText = 'Pro (Yearly)'
    }
});


let online = document.querySelector('#online');
let larger = document.querySelector('#larger');
let profile = document.querySelector('#profile');

let onlinecost = 0;
let largercost = 0;
let profilecost = 0;

online.addEventListener('change', function() {
    if (online.checked) {
        onlinecost = 1;
    } else {
        onlinecost = 0;
    }
});

larger.addEventListener('change', function() {
    if (larger.checked) {
        largercost = 2;
    } else {
        largercost = 0;
    }
});

profile.addEventListener('change', function() {
    if (profile.checked) {
        profilecost = 2;
        console.log(profilecost);
    } else {
        profilecost = 0;
    }
});








