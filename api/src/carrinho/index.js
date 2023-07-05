const { text } = require('express');
const Database = require('../connection');

async function findAll(id) {
  console.log(id);
  const query = {
    text: 'SELECT * FROM carrinho WHERE usuario_id = $1',
    values: [id]
  };
  const result = await Database.query(query);
  return result;
}

async function save(carrinho) {
  console.log(carrinho);
  const query = {
    text: 'INSERT INTO carrinho (nome_produto, id_produto, valor_produto, usuario_id, imagem_produto, quantidade_produto) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    values: [carrinho.nome_produto, carrinho.id_produto, Number(carrinho.valor_produto), carrinho.usuario_id, carrinho.imagem_produto, carrinho.quantidade_produto]
  };
  await Database.query(query);

}

async function remove(id) {
  const query = {
    text: 'DELETE FROM carrinho WHERE id = $1',
    values: [id]
  }
  await Database.query(query);
}

module.exports = { findAll, save, remove };
