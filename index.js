//////IMPORT DEPENDENCIES/////////////
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

///////SET PORT//////////////////////
const port = 9000;

///////IMPORT ROUTES/////////////////
const actionRoutes = require('./actions/actionRoutes');
const projectRoutes = require('./projects/projectRoutes')

//////SET EXPRESS SERVER//////////////
const server = express()
//////SET MIDDLEWARE THAT WE WANT THE SERVER TO USE//////////
server.use(express.json()), cors(), helmet(), morgan('tiny');

////////EXPRES ROUTER HANDLERS/////////////
server.use('/actions', actionRoutes);
server.use('/projects', projectRoutes )

//////SET SERVER TO LISTEN ON PORT////////////////
server.listen(port, ()=> {
    console.log(`\n=== API is running on port: ${port} === \n`)
})
