const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebSocket } = require('./websocket');
 
const app = express();
const server = http.Server(app);

setupWebSocket(server);
 //Name and Password of your mongodb account
mongoose.connect('mongodb+srv://NAMEPASSWORD@cluster0-bm9sb.mongodb.net/test?retryWrites=true&w=majority', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

app.use(cors())
app.use(express.json());
app.use(routes);

server.listen(3333);
