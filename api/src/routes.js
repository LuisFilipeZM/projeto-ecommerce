const express = require('express');
const { findAll, remove, save, update } = require('./produtos/index');
const usuarios = require('./usuarios/index');
const { json } = require('express/lib/response');
const router = express.Router();

router.get('/produtos', async (req, res) => {
  const produtos = await findAll();
  res.json(produtos);
});

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


module.exports = router;
