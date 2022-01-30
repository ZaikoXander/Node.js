const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/html/index.html');
});

app.get('/sobre', function(req, res) {
    res.sendFile(__dirname + '/html/sobre.html');
});

app.get('/blog', function(req, res) {
    res.send('Bem-vindo ao meu blog!'); 
});

app.get('/ola/:cargo/:nome/:cor', function(req, res) {
    res.send(
        `<h1>Ola ${req.params.nome.charAt(0).toUpperCase() + req.params.nome.slice(1)}</h1>`+
        `<h2> Seu cargo e: ${req.params.cargo}</h2>`+
        `<h3> Sua cor favorita e: ${req.params.cor}</h3>`
        );
});

app.listen(8081, function() {
    /* Função de callback é uma função que é executada sempre que algum evento acontece. */
    console.log('Servidor Rodando na url http://localhost:8081');
});
/*
Abaixo disso ^^^ não pode ter mais nenhum código relacionado ao express,
pois não irá funcionar.
*/