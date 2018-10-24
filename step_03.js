
//  Week 08 Express: More Complex Routing
//  Step 03

//  Import the express library
const express = require('express')

//  Create an instance of express
const app = express()

//  Declare a port to run on
const port = 3000

//  The next()
let num_reqs = 0;
let logger = (req, res, next) => {
  num_reqs += 1;
  console.log("This is request #" + num_reqs);
  next();
}
app.use(logger);

//  Declare a route
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

//  Start Express Web Server i.e. start listing on the port you defined
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
