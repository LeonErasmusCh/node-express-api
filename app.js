const express = require('express')
const app = express()
const port = 3000


//run with $node app.js

const cars = [
    {
        id: "1",
        make: "Ford",
        year: "1983",
        color: "Red"
    },
    {
        id: "2",
        make: "Volkswagen",
        year: "1960",
        color: "Green"
    }
]


app.get('/', (req, res) => {
  res.send('This is the root get request...')
})

// Get all cars
app.get('/api/cars', (req, res) => {
    if(cars){
        res.send(cars)
    } else {
        res.send("Oooops! No cars were found...")
    }
})

// Get car by id
app.get('/api/cars/:id', (req, res) => {
        res.send(`This is the CAR id: ${req.params.id}`)
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})