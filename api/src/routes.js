const express = require('express');
const produtosService = require('./produtos/index');
const usuarios = require('./usuarios/index');
const carrinhoService = require('./carrinho/index');
const { json } = require('express/lib/response');
const router = express.Router();

//PRODUTOS
router.post('/produtos', async (req, res) => {
  const produto = req.body
  await produtosService.save(produto);
  res.json({ sucesso: true });
})

router.get('/produtos', async (req, res) => {
  const produtos = await produtosService.findAll();
  res.json(produtos);
});

router.get('/produtos/:id', async (req, res) => {
  const { id } = req.params;
  const produto = await produto.findOne(id);
  res.json(produto);
});

router.delete('/produtos/:id', async (req, res) => {
  const { id } = req.params;
  await produtosService.remove(id);
  res.json({ sucesso: true });
});

//!!USUARIOS
router.post('/usuarios', async (req, res) => {
  const { nome, cpf, email, senha, data_nascimento } = req.body; // Correção: req, não rec
  await usuarios.save(nome, cpf, email, senha, data_nascimento);
  res.json({ sucesso: true });
});

router.get('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    const usuario = await usuarios.findOne(id);
    res.json(usuario);
});

router.put('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, cpf, email, senha, data_nascimento } = req.body;
    await usuarios.update(id, nome, cpf, email, senha, data_nascimento);
    res.json({ sucesso: true });
});

router.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    const usuario = await usuarios.login(email, senha);
    res.json(usuario);
});

//CARRINHO
router.get('/carrinho/:id', async (req, res) => {
  const { id } = req.params;
  const carrinho = await carrinhoService.findAll(id);
  res.json(carrinho);
});

router.post('/carrinho', async (req, res) => {
  const {nome_produto, id_produto, valor_produto, usuario_id, imagem_produto, quantidade_produto} = req.body;
  await carrinhoService.save(nome_produto, id_produto, valor_produto, usuario_id, imagem_produto, quantidade_produto);
  res.json({ sucesso: true });
});

router.delete('/carrinho/:id', function(req, res) {
  const id = req.params;
  carrinhoService.remove(id);
  res.json({ sucesso: true });
});

module.exports = router;
