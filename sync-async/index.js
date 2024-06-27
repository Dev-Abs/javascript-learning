// sync-async

// console.log("start");

// setTimeout(() => {
//   console.log("setTimeout");
// }, 4000);

// console.log("end");

// sync callbacks

// function sum(a, b) {
//   console.log(a + b);
// }

// function calculator(a, b, callback) {
//   callback(a, b);
// }

// calculator(5, 5, sum);

// const hello = () => {
//   console.log("Hello");
// };

// setTimeout(hello, 5000);

//nesting

// let age = 23;
// if (age >= 18) {
//   if (age >= 21) {
//     console.log("You are eligible to vote and drink");
//   } else {
//     console.log("You are eligible to vote");
//   }
// } else {
//   if (age >= 16) {
//     console.log("You are eligible to drive");
//   } else {
//     console.log("You are not eligible to vote");
//   }
// }

// explain callback hell
// callback hell is a situation where you have
// multiple nested callbacks which makes the code
// difficult to read and maintain. It is also known as
//  pyramid of doom. It is a situation where you have
//  multiple nested callbacks which makes the code
//  difficult to read and maintain. It is also known
//  as pyramid of doom.

// How to avoid callback hell
// 1. Use named functions
// 2. Modularize your code
// 3. Use Promises
// 4. Use async/await

// create random database

const users = [
  {
    id: 1,
    name: "John",
    age: 23,
    email: "",
  },
  {
    id: 2,
    name: "Jane",
    age: 25,
    email: "",
  },
  {
    id: 3,
    name: "Doe",
    age: 26,
    email: "",
  },
];

function getUser(id, callback) {
  const user = users.find((user) => user.id === id);
  if (!user) {
    callback(`User with id ${id} not found`);
  } else {
    callback(null, user);
  }
}

// function getData(dataID, getNextData){
//     setTimeout(() => {
//        console.log('data', dataID);
//        if (getNextData){
//           getNextData();
//        }
//     }, 2000);
// }

// // callback hell

// getData(1, () => {
//     getData(2, () => {
//         getData(3)
//     }
//     )
// }
// )

// explain how above code is working?, exaplain the flow of the code
// 1. getData(1) is called
// 2. setTimeout is called and it logs 'data 1' after 2 seconds
// 3. getNextData() is called which is getData(2)
// 4. getData(2) is called
// 5. setTimeout is called and it logs 'data 2' after 2 seconds
// 6. The code runs without any error

// Promises

// Explain Promises in deep
// A promise is an object that may produce a single value some time in the future:
// either a resolved value, or a reason that it’s not resolved (e.g., a network error
//  occurred) A promise may be in one of 3 possible states: fulfilled, rejected, or pending.
//  Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

// function getData(dataID, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataID);
//       resolve("data retrieved");

//       // reject('data not retrieved');
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

// How to create a promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
    // reject('rejected')
  }, 2000);
});

// let result = getData(1);

//   How to consume a promise
// result.then((data) => {
//     console.log(data);
//   }
//     )
//     .catch((error) => {
//       console.log(error);
//     });

// promise chaining

function asyncFunction1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(' data 1');
      resolve("Promise 1 resolved");
    }, 4000);
  });
}

function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(' data 2');
        resolve("Promise 2 resolved");
        }, 4000);
    });
    }

// let p1 = asyncFunction1();
// console.log("fetching data 1");
// p1.then((data) => {
//   console.log(data);
//   console.log("fetching data 2");
//   let p2 = asyncFunction2();
//   p2.then((data)=>{
//     console.log(data);
//   })
// });


// let p2 = asyncFunction2();
// console.log("fetching data 2");
// p2.then((data) => {
//   console.log(data);
// });


// console.log('fetching data 1');
// asyncFunction1().then((data) => {
//     console.log(data);
//     console.log('fetching data 2');
//     asyncFunction2().then((data) => {
//         console.log(data);
// })
// })




// function getData(dataID) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("data", dataID);
//         resolve("data retrieved");
//         }
//       )}, 5000)};


      function getData(dataID) {    
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                console.log("data", dataID);
                resolve("data retrieved");
                }, 2000);
            });
            }

//Promise chain

// getData(1)
// .then((data) => {
//     console.log(data);
//     getData(2).then((data)=>{
//         console.log(data);
//     })
// })


// getData(1)

// getData(1).then((data) =>{
//     return getData(2)
// }).then((data)=>{
//     console.log(data);
// })



// explain async-await in detail
// async-await is a new way to write asynchronous code in javascript.
// It is built on top of promises and makes the code look synchronous.
// async-await is a new way to write asynchronous code in javascript.



async function hello(){
    console.log('hello');
}


    function api(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('data retrieved');
            }, 2000);
        });
    }

async function getWeatherData(){
    await api();
    await api();
}



// Async Await in get data

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    await getData(6);
    await getData(7);
    await getData(8);
    await getData(9);
}
// getWeatherData();
// getAllData();   

// IIFE - Immediately Invoked Function Expression
(function() {
})();

(async function(){
    await getData(1);
    await getData(2);
})();

// choice of using promises or async-await
