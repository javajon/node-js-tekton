// import express (after npm install express)
const express = require('express');

// create new express app and save it as "app"
const app = express();

// server configuration
const PORT = 8080;

// create a route for the app
app.get('/', (req, res) => {
  res.send('Hello. Breast cancer death rates declined 40% from 1989 to 2016 among women.<p><a href="https://www.nationalbreastcancer.org/early-detection-of-breast-cancer/">The progress is attributed to improvements in early detection.</a>');
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
