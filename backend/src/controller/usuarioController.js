const Usuario = require('../model/usuario');
const status = require('http-status');

// obtendo a require do que vier do model de Usuario
exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const salario = req.body.salario;
    const dataNascimento = req.body.dataNascimento;
    const ativo = req.body.ativo;

    // create: método que faz o insert dos dados no banco
    Usuario.create({
        nome: nome,
        salario: salario,
        dataNascimento: dataNascimento,
        ativo: ativo
    })
        .then(usuario => {
            if (usuario) res.status(status.OK).send(usuario);
            else res.status(status.NOT_FOUND).send();
        })
        .catch(error => next(error));
}

// método para listar todos os usuários
exports.SearchAll = (req, res, next) => {
    Usuario.findAll()
        .then(usuario => {
            if (usuario) res.status(status.OK).send(usuario);
            else res.status(status.NOT_FOUND).send();
        })
        .catch(error => next(error));
}

// método para listar um usuário especifico
exports.SearchOne = (req, res, next) => {
    const id = req.params.id;

    Usuario.findByPk(id)
        .then(usuario => {
            if (usuario) res.status(status.OK).send(usuario);
            else res.status(status.NOT_FOUND).send();
        })
        .catch(error => next(error));
}

// método para atualizar
exports.Update = (req, res, next) => {
    // pego os valores do usuário a ser editado
    const id = req.params.id;
    const nome = req.body.nome;
    const salario = req.body.salario;
    const dataNascimento = req.body.dataNascimento;
    const ativo = req.body.ativo;

    // busco na tabela usando o id do usuário
    Usuario.findByPk(id)
        .then(usuario => {
            if (usuario) {
                usuario.update({
                    nome: nome,
                    salario: salario,
                    dataNascimento: dataNascimento,
                    ativo: ativo
                },
                {
                    where: { id: id } 
                })
                .then(() => {
                    res.status(status.OK).send();
                })
                .catch(error => next(error));
            }else{
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
}

// método para deletar 
exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Usuario.findByPk(id)
    .then(usuario => {
        if(usuario){
            usuario.destroy({
                where: { id: id }
            })
            .then(() => {
                res.status(status.OK).send();
            })
            .catch(error => next(error));
        }else{
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
}