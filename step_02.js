
//  Week 08 Express: More Complex Routing
//  Step 02

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

//  Write API Code
function reallyCoolAPI(query) {
  //  Parsing query...
  //  Spooling threads...
  //  Calculating calculations...
  //  Reducing results...
  return "my API result"
}

//  Declare API Route
app.get("/api/search/query", (req, res) => {
  let query = req.params.query
  res.send(reallyCoolAPI(query))
})

//  Start Express Web Server i.e. start listing on the port you defined
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
