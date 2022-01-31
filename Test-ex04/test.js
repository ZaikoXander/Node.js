const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

// Model
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

/* Postagem.create({
    titulo: 'UM TITULO QUALQUER',
    conteudo: 'dfasfvasfb jdsdjfygakbdfjad bikasd'
}); */

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

/* Usuario.create({
    nome: 'Zaiko',
    sobrenome: 'Xander',
    idade: 17,
    email: 'email@teste.com'
}); */

/*
sequelize.authenticate().then(function() {
    console.log('Conectado com sucesso!');
}).catch(function(erro) {
    console.log(`Falha ao se conectar: ${erro}`);
});
*/