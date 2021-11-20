const express = require('express')
var colors = require('colors');
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
        //res.send(`This is the CAR id: ${req.params.id}`)
        //res.json({massage : "This is the CAR id: " +req.params.id})
        res.json(req.params.id)
        
})


//POST
app.post('/api/cars', (req, res) => {
    const car = {
        id: cars.length +1,
        make: req.body.make
    }
    cars.push(car);
    res.send(car);
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`.brightYellow)
})