/** @format */

const express = require('express');
const app = express();

// initialize the middleware
// It will happen every request
app.use(middleWare);
app.use(middleWare2);

function middleWare(req, res, next) {
  req.customProperty = 100;
  next();
}

function middleWare2(req, res, next) {
  console.log(`In middleware2 print middleware1 custom property ${req.customProperty}`);
  req.customProperty = 600;
  next();
}

function errorHandler(error, requestObject, responseObject, nextMiddleWare) {
  if (error) responseObject.send('Hello errorhandler');
}

function callback(requestObject, responseObject, nextMiddleWare) {
  console.log(`In callback print middleware2 custom property ${requestObject.customProperty}`);
  console.log('Hello World function');
  responseObject.send('Hello World!');
}

app.get('/', callback);

app.listen(3000, () => {});
