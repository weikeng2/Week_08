
//  Week 08 Express: More Complex Routing
//  Step 01

//  Import the express library
const express = require('express')

//  Create an instance of express
const app = express()

//  Declare a port to run on
const port = 3000

//  Declare a route
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html")
})

app.get("/page/:p", (req, res) => {
  let p = req.params.p
  res.send(p)
})

//  Start Express Web Server i.e. start listing on the port you defined
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
