// please do in id= from add all currencies listed in codes.js in its options

const URL = "https://open.er-api.com/v6/latest"

document.addEventListener('DOMContentLoaded', () => {
    exchangeRate()}
)
const dropdowns = document.querySelectorAll('.currency-result select')
let fromCurr = document.querySelector('#from')
let toCurr = document.querySelector('#to');
console.log('fromCurr', fromCurr)
console.log('toCurr', toCurr)

let message = document.querySelector('.message')

const btn = document.querySelector('.btn')
for (let select of dropdowns){
    for (code in countryList){
        const option = document.createElement('option')
        option.value = code
        option.textContent = code
        if(select.name === 'from' && code === 'USD'){
            option.selected = true
        }
        if(select.name === 'to' && code === 'PKR'){
            option.selected = true
        }
        select.appendChild(option)
    }

    select.addEventListener('change', (e) => {
        updateFlag(e.target)
    })
}


const updateFlag = (element) => {
    let code = element.value;
    let flag = countryList[code];
    // console.log('code', code, 'flag', flag)
    let newSrc = `https://flagsapi.com/${flag}/flat/64.png`;
    let img = element.parentElement.querySelector('img');
    img.src = newSrc;
}


btn.addEventListener('click', (evt) =>{
    evt.preventDefault()
    exchangeRate()
})

const exchangeRate = async () => {
    let amount = document.querySelector('.amount');
    let amountValue = amount.value;
    if(amountValue === '' || amountValue === null || amountValue === undefined || amountValue < 0){
        alert('Please enter valid amount')
        return
    }
    let from = fromCurr.value;
    let to = toCurr.value;
    const GETURL = `${URL}/${from.toLowerCase()}`
    const res = await fetch(GETURL)
    const data = await res.json()
    let cvtRate = data.rates[to]*amountValue;

    message.innerText = `${amountValue} ${from} is equal to ${cvtRate} ${to}`

    let converted = document.querySelector('.converted')
    converted.value = cvtRate
}


