// fetch api

const URL ="https://cat-fact.herokuapp.com/facts"

// get,put,post,delete - fetch api
// by default fetch is get method

// AJAX - Asynchronous JavaScript and XML
// fetch api - modern way of making AJAX requests
// fetch api - promise based


// JSON
// JavaScript Object Notation
// JSON is a syntax for storing and exchanging data
// JSON is text, written with JavaScript object notation
// JSON is easy to read and write
// JSON is language independent
// AJAJ - Asynchronous JavaScript and JSON - AJAX

const factPara = document.querySelector('#fact')
const factbtn = document.querySelector('#factbtn')


// const getCatFacts = async () => {
//     let response = await fetch(URL)
//     let data = await response.json() // json() is a method that returns a promise
//     console.log(data[0].text)
//     factPara.textContent = data[0].text
// }


// using .then promise chaining method 

const getCatFacts = () => {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data[0].text)
        factPara.textContent = data[0].text
    })
    .catch(error => {
        console.log(error)
    })
}

// const getCatFacts = () => {
//     fetch(URL)
//     .then((response) => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data[0].text)
//         factPara.textContent = data[0].text
//     })
//     .catch(error => {
//         console.log(error)
//     })
// }

factbtn.addEventListener('click', getCatFacts) 



// request - response cycle
// request - client to server
// response - server to client
// client - browser
// server - backend
// client - server
// request - response
// client - server - client
// client - server - database - server - client


// HTTP Verbs - GET, POST, PUT, DELETE, PATCH
// GET - fetch data from server
// POST - send data to server
// PUT - update data on server
// DELETE - delete data on server
// PATCH - update data on server

// REST API - Representational State Transfer

// response status codes
// 200 - OK
// 201 - Created
// 400 - Bad Request
// 404 - Not Found
// 500 - Internal Server Error
// 401 - Unauthorized
// 403 - Forbidden
// 405 - Method Not Allowed
// 409 - Conflict
// 429 - Too Many Requests
// 503 - Service Unavailable
// 504 - Gateway Timeout


// headers
// content-type
// application/json
// application/xml
// application/x-www-form-urlencoded
// multipart/form-data
// text/plain
// text/html
// text/xml
// text/csv
// text/javascript
// text/css
// application/javascript
// application/pdf
// application/zip


// post request using fetch

const postCatFacts = async () => {
    let response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "text": "This is a new cat fact"
        })
    })
    let data = await response.json()
    console.log(data)
}


