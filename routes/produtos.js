const express = require('express');
const router = express.Router();


///RETORNA TODOS OS PRODUTOS
router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de produtos'
    });
});
///INSERE OS PRODUTOS
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o POST dentro da rota de produtos'
    });
});

//RETORNA OS DADOS DO PRODUTO
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    if (id === 'especial'){
        res.status(200).send({
            mensagem: 'Você descobriu o produto exclusivo',
            id: id
        });
    } else { 
        res.status(200). send({
            mensagem: 'Você passou um ID',
        });
    }
    
});

//ALTERA UM PRODUTO
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o Patch dentro da rota de produtos'
    });
});

//DELETA UM PRODUTO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o DELETE dentro da rota de produtos'
    });
});

module.exports = router;