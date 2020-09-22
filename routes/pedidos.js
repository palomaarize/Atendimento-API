const express = require('express');
const router = express.Router();


///RETORNA TODOS OS PEDIDOS
router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Usando os pedidos'
    });
});
///INSERE OS PEDIDOS
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'O pedido foi criado'
    });
});

//RETORNA OS DADOS DO PEDIDO
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido
    res.status(200).send({
            mensagem: 'Detalhes do pedido',
            id_pedido: id
     });
    
});

//DELETA UM PEDIDO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido excluído'
    });
});

module.exports = router;