let express = require('express')
// body-parser converts data sent in a request to JSON
let bodyParser = require('body-parser')
let api_routes = require('./routes/api')
//let path = require('path')

//app configuration
let app = express()

//app.use(express.static(path.join(__dirname, 'activity-client', 'dist')))


app.use(bodyParser.json())

app.use('/api', api_routes)



//error handlers for route not found
app.use((req, res, next)=>{
    res.status(400).send('Not found')
})

// error handler for server errors
app.use( (err, req, res, next) =>{
    console.error(err.stack)
    res.status(500).send('Server error')
})
// Start server runnning
let server = app.listen(process.env.PORT || 3000, () =>{
    console.log('Express server running on port', server.address().port)
}) 

