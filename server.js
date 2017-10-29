const express = require("express");
const session = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const port = 8000;
const socket = 8001;

app.use(express.static(__dirname + '/public/dist'));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(session({
  secret: 'swimforlife',
  resave: false,
  saveUninitialized: true
}));

require('./server/config/mongoose');
require('./server/config/routes')(app);

const XSocket = require('./server/controllers/xsocket.js');
var start_time = Date();

app.listen(port, function() {
  console.log(`*SERVER RESTART::`, start_time);
  console.log(`*BADGES:: PORT`, port );
  console.log(`Badges Fitness Goal Server v0.01`);
  console.log(`connect on port ${socket} for server status ...`);
})
