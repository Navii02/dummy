//import json library
const jsonServer = require('json-server');
// create a server
const Mediaplayer = jsonServer.create()

//middleware defaults is used to parse JSON format

const middleware =jsonServer.defaults()

Mediaplayer.use(middleware)

//setup path to store data

const router = jsonServer.router('db.json')

Mediaplayer.use(middleware)
Mediaplayer.use(router)


//set up port to server
const PORT = 5000 ||process.env.PORT

//To listern the request from the frontend

Mediaplayer.listen(PORT ,()=>{
    console.log(`server is running in port ${PORT}`);
    
})
