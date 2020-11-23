const express = require('express')
const app = express()
var config = require('./config');
var controller = require('./routes/controller');
var bodyParser = require('body-parser');


app.set('port', (process.env.PORT || 5000))

var routes = require('./routes/controller');
app.use('/controller', controller);


app.use(bodyParser.urlencoded({
    extended: false
   }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Spin up the server
    app.listen(app.get('port'), function () {
        console.log('running on port', app.get('port'))
    })
    
