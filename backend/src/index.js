const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebSocket } = require('./websocket');
 
const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://Raian:debnathlinda448@cluster0-bm9sb.mongodb.net/test?retryWrites=true&w=majority', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

app.use(cors())
app.use(express.json());
app.use(routes);



// Métodos HTTP : get, post, put, delete\
// get: pega informação
// post: cria informação
// put: altera informação
// delete: deleta informação

// Tipos de parâmentos:
// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Indentificar um recuros na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registo)

// MongoDB (Não-relacional)

 server.listen(3333);