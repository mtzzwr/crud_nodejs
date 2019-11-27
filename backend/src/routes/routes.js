const express = require('express');
const router = express.Router();
const UsuarioController = require('../controller/usuarioController');

// quando extiver em /usuarios na requisição post automaticamente irá 
// realizar o insert no banco por meio do sequelize
router.post('/usuarios', UsuarioController.Insert);

// quando extiver em /usuarios na requisição get, ele exibe todos os registros da tabela
router.get('/usuarios', UsuarioController.SearchAll);

// quando extiver em /usuarios na requisição get, ele um registro em especifico, buscando pelo id
router.get('/usuarios/:id', UsuarioController.SearchOne);

// quando extiver em /usuarios na requisição put, ele atualiza um registro
router.put('/usuarios/:id', UsuarioController.Update);

// quando extiver em /usuarios na requisição delete, ele deleta um registro
router.delete('/usuarios/:id', UsuarioController.Delete);

module.exports = router;