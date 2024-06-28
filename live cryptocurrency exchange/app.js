let btc = document.getElementById('btc');
let eth = document.getElementById('eth');
let doge = document.getElementById('doge');
 
//  var settings ={
//     "async": true,
//     "scrossDomain": true,
//     "url": 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd',
//     "method": "GET",
//     "headers": {}
//  }

//  $.ajax(settings).done(function (response) {
//     console.log(response);
//     btc.innerHTML = response.bitcoin.usd;
//     eth.innerHTML = response.ethereum.usd;
//     doge.innerHTML = response.dogecoin.usd;
//  });


 const getData = async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd');
    const data = await response.json();
    btc.innerHTML = data.bitcoin.usd;
    eth.innerHTML = data.ethereum.usd;
    doge.innerHTML = data.dogecoin.usd;
 }
 getData();

