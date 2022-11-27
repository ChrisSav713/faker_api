const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.send(`<h1>Users Root Page</h1>
    <a href="/users/new">New users<a><br>
    <a href="/users/edit">Edit users<a><br>
    <hr>
    <a href="/"><- Root<a>
    `)
})

router.get('/new', (req, res) => {
    res.send(`<h1>Users Sub Page - new</h1>
    <a href="/users"><- Users<a>
    `)
})

router.get('/edit', (req, res) => {
    res.send(`<h1>Users Sub Page - edit</h1>
    <a href="/users"><- Users<a>
    `)
})

module.exports = router