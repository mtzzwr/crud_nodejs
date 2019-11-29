const http = require('http');
const express = require('express');
const status = require('http-status');
const sequelize = require('./src/database/database');
const app = express();
const routes = require('./src/routes/routes');
const cors = require('cors');

// iniciando a aplicação avisando que os tipos de dados são json
app.use(express.json());

// definindo url base que é a /sistema
// e o que vier depois será tratado pelas rotas
app.use('/sistema', routes);

// tratamento de erros
app.use((req, res, next) => {
    res.status.apply(status.NOT_FOUND).send("Page not found :(");
});

// tratamento de erros
app.use((req, res, next) => {
    res.status.apply(status.INTERNAL_SERVER_ERROR).json({error});
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// sincronização do sequelize com a definição da porta e servidor
// force: false - para toda vez que a aplicação rodar, não seja criada as tabelas novamente
sequelize.sync({force: false}).then(() => {
    const port = 3003;
    app.set('port ', port);
    const server = http.createServer(app);
    server.listen(port);
}); 