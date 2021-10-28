// This is the main file which will run our project on the server
const express = require('express');
const cors = require('cors');

// Initialising the app with Express
const app = express();
const PORT = process.env.PORT || 3000 // Check for the variable value for PORT else use 3000

// Using the CORS to avoid any CORS issue on the server end
app.use(cors());

//For testing 
app.get('/spacex/api/v1/home', (req, res) => {
    res.status(200).json({ message: 'Welcome to the SpaceX API'})
});

// Passing the app item to the router file
require('./router/router')(app)

// Running the project on server using lister()
app.listen(PORT, () => { 
    console.log(`App is running on the port: ${PORT}`);
});