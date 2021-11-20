const express = require('express')
var colors = require('colors');
const { request } = require('express');
const app = express()
const port = 3000

app.use(express.json())

//run with $node app.js

const cars = [
    {
        id: "1",
        make: "Ford"
    },
    {
        id: "2",
        make: "Volkswagen"

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
        const car = cars.find(cars => cars.id === req.params.id)
        if(!car) {
            res.status(404).send("oops...car with given ID not found!")
        }
       res.send(car)
})


//POST
app.post('/api/cars', (req, res) => {
    const car = {
        id: cars.length +1,
        make: req.body.make
    }
    if(!req.body.make || req.body.make.length < 3){
        res.status(400).send('Make is required and should contain a minimum of 3 characters');
        return;
    }
    cars.push(car);
    res.send(car);
})

// update PUT
app.put('/api/cars/:id', (res,req) => {
    // look up the cars
    //if no cars, return 404
     
    //validate cars
    //if not valid, return 404


    //update cars
    //return updated cars
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`.brightYellow)
})