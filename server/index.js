// PACKAGES
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');

// CONTROLLERS

// SERVER, SESSION, AND DB CONNECTION SETUP 
const app = express();
const {
  SESSION_SECRET,
  CONNECTION_STRING,
  SERVER_PORT
} = process.env;
app.use(express.json());
app.use( express.static( `${__dirname}/../build` ) );
app.use(session({
  secret: SESSION_SECRET,
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }
}));
massive(CONNECTION_STRING).then(database => {
  app.set('db', database);
  console.log('database connected');
  app.listen(SERVER_PORT, () => {
    console.log(`server listening on port: ${SERVER_PORT}`)
  })
})

// ENDPOINTS