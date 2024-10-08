const express = require('express')
const PORT = process.env.PORT || 3003

const app = express()

app.listen(PORT,() => {
    console.log(`Express server running on port ${PORT}`)
} )


app.get('/greetings', (req, res) => {
    res.send('Greetings Mathilda')
})


const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


app.get('/shoes', (req, res) => {
res.send ('collectibles')
})

app.get('/roll/6', (req, res) => {
    res.send('you rolled a 6!')
})

app.get('/roll/20', (req, res) => {
    res.send('you rolled a 20!')
})

app.get('0' , (req, res) => {
    res.send('you must roll a higher number')
})

app.get('/collectibles/2' , (req, res) => {
    res.send('This item is not instock')
})