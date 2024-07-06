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

let monthyear = document.getElementById('monthyear');
let finalAmount = document.getElementById('finalAmount');

let account = document.getElementById('account');
let finalaccountamount = document.getElementById('finalaccountamount');

let serviceamount = document.getElementById('serviceamount');
let largeramount = document.getElementById('largeramount');
let customamount = document.getElementById('customamount');

let finalservice = document.querySelector('#finalonline');
let finallarger = document.querySelector('#finallarger');
let finalprofile = document.querySelector('#finalprofile');



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
    console.log('in step 2 finish', monthBool, yearBool);

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
    console.log(accountCost);

    account.innerText = totalText;

    finalAmount.innerText = accountCost + onlinecost + largercost + profilecost;

    if(monthBool){
    finalAmount.innerText = '$' + finalAmount.innerText + '/mo';
    finalaccountamount.innerText = '$' + accountCost + '/mo';
    }
    if(yearBool){
        finalAmount.innerText = '$' + finalAmount.innerText + '/yr';
        finalaccountamount.innerText = '$' + accountCost + '/yr';
    }

    if(online.checked){
        onlineservice.classList.remove('hidden');
    }
    if(larger.checked){
        largerstorage.classList.remove('hidden');
    }
    if(profile.checked){
        customprofile.classList.remove('hidden');
    }

    if(!online.checked){
        onlineservice.classList.add('hidden');
    }
    if(!larger.checked){
        largerstorage.classList.add('hidden');
    }
    if(!profile.checked){
        customprofile.classList.add('hidden');
    }
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

    // if(monthBool){
    //     console.log('in month');
    //     console.log(serviceamount);

    // } 

    if(yearBool){
        console.log('in year');
        console.log(serviceamount);

    }



toggle.addEventListener('change', function () {
    if (label.classList.contains('notchecked')) {
        arcadetext.innerText = '$90/yr';
        advancetext.innerText = '$120/yr';
        protext.innerText = '$150/yr';

        serviceamount.innerText = '$' + 12 + '/yr';
        largeramount.innerText = '$' + 24 + '/yr';
        customamount.innerText = '$' + 24 + '/yr';

        advance.classList.remove('active');
        arcade.classList.remove('active');
        pro.classList.remove('active');
        

        yearBool =true;
        monthBool = false;
    } 
    else if (label.classList.contains('checked')) {
        arcadetext.innerText = '$9/mo';
        advancetext.innerText = '$12/mo';
        protext.innerText = '$15/mo';

        serviceamount.innerText = '$' + 1 + '/mo';
        largeramount.innerText = '$' + 2 + '/mo';
        customamount.innerText = '$' + 2 + '/mo';

        advance.classList.remove('active');
        arcade.classList.remove('active');
        pro.classList.remove('active');

        monthBool = true;
        yearBool = false;

}
});

let accountCost = 0;
let totalText = '';



arcade.addEventListener('click', function() {
    arcade.classList.add('active');
    advance.classList.remove('active');
    pro.classList.remove('active');

    if (monthBool){
        totalText = 'Arcade (Monthly)'
        accountCost = 9;
    }

    if (yearBool){
        totalText = 'Arcade (Yearly)'
        accountCost = 90;
    }
});

advance.addEventListener('click', function() {
    advance.classList.add('active');
    arcade.classList.remove('active');
    pro.classList.remove('active');
    
    if (monthBool){
        totalText = 'Advanced (Monthly)';
        accountCost = 12;
    }

    if (yearBool){
        totalText = 'Advanced (Yearly)';
        accountCost =120;
    }
});

pro.addEventListener('click', function() {
    pro.classList.add('active');
    advance.classList.remove('active');
    arcade.classList.remove('active');
    
    if (monthBool){
        totalText = 'Pro (Monthly)'
        accountCost =15;
    
    }

    if (yearBool){
        totalText = 'Pro (Yearly)'
        accountCost= 150;
    }
});


let online = document.querySelector('#online');
let larger = document.querySelector('#larger');
let profile = document.querySelector('#profile');

let onlineservice = document.querySelector('#onlineservice');
let largerstorage = document.querySelector('#largerstorage');
let customprofile = document.querySelector('#customprofile');

let onlinecost = 0;
let largercost = 0;
let profilecost = 0;

online.addEventListener('change', function() {
    if (online.checked && monthBool) {
        onlinecost = 1;
        finalservice.innerText = '$' + onlinecost + '/mo';
    } else if (online.checked && yearBool){
        console.log('in year service');
        onlinecost = 12;
        finalservice.innerText = '$' + onlinecost + '/yr';
        console.log('in year service', finalservice.innerText);
    } else {
        onlinecost = 0;
    }
});

larger.addEventListener('change', function() {
    if (larger.checked && monthBool) {
        largercost = 2;
        finallarger.innerText = '$' + largercost + '/mo';
    } else if (larger.checked && yearBool){
        largercost = 24;
        finallarger.innerText = '$' + largercost + '/yr';
    } else {
        largercost = 0;
    }
});

profile.addEventListener('change', function() {
    if (profile.checked && monthBool) {
        profilecost = 2;
        finalprofile.innerText = '$' + profilecost + '/mo';
    } else if (profile.checked && yearBool){
        profilecost = 24;
        finalprofile.innerText = '$' + profilecost + '/yr';
    } else {
        profilecost = 0;
    }
});








