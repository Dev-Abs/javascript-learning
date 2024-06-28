
const successBtn = document.getElementById('success');
const errorBtn = document.getElementById('error');
const invalidBtn = document.getElementById('invalid');
const warningBtn = document.getElementById('warning');

let successMsg = '<i class="fa-solid fa-square-check"></i> Successfully submitted the form';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Error in submitting the form';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid form';
let warningMsg = '<i class="fa-solid fa-triangle-exclamation"></i> Warning';



let toastBox = document.querySelector('#toastbox')

const showNotification = (msg, type) =>{
    console.log('clicked')
    let toast = document.createElement('div');
    toast.classList.add('toast')
    toast.innerHTML = msg;
    toastBox.appendChild(toast)
    if(type === 's'){
        toast.childNodes[0].style.color = 'green'
        toast.classList.add('success')
    }
    if(type === 'e'){
        toast.childNodes[0].style.color = 'red'
        toast.classList.add('error')
    }
    if(type === 'i'){
        toast.childNodes[0].style.color = 'blue'  
        toast.classList.add('invalid')

    }
    if(type === 'w'){
        toast.childNodes[0].style.color = 'orange'
        toast.classList.add('warning')
    }
    setTimeout(() => {
        toast.remove()
    }, 5000);
}

successBtn.addEventListener('click', function(){
    showNotification(successMsg, 's')
},false);

errorBtn.addEventListener('click', function(){
    showNotification(errorMsg, 'e')
}
,false);

invalidBtn.addEventListener('click', function(){
    showNotification(invalidMsg, 'i')
},false);

warningBtn.addEventListener('click', function(){
    showNotification(warningMsg, 'w')
},false);
