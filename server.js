//npm init -y
//install i express
//npm i --save-dev nodemon
//scripts
//"devStart": "nodemon server.js"
//npm i ejs

const { faker } = require('@faker-js/faker');
const express = require('express')
const app = express()
app.listen(3000)

app.set('view engine', 'ejs')

const apiRouter = require('./routes/api')
app.use('/api', apiRouter)

// const userRouter = require('./routes/users')
// app.use('/users', userRouter)

// app.get('/testError', (request, response, next) => {
//     const testError = true
//     testError ?
//         response.status(500).json({ "message": "500 Error" }) :
//         response.status(200).json({ "message": "All good" })
// })

// app.get('/index', (request, response, next) => {
//     response.render("index.ejs", { "text": "(This text was sent from server.js file)" })
// })

// app.get('/', (request, response, next) => {
//     response.send(`<h1>Root</h1>
//     <p>links...<p>
//     <p><a href="/api/users/new">/api/users/new<a></p>
//     <p><a href="/api/companies/new">/api/companies/new<a></p>
//     <p><a href="/api/products/new">/api/products/new<a></p>
//     <p><a href="/api/user/company">/api/user/company<a></p>
//     `)
// })