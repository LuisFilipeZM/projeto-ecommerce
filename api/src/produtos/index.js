const Database = require('../connection');

async function findAll() {
  await Database.connect();
  const result = await Database.query('SELECT * FROM produtos');
  return result;
}

async function save(nome, preco, quantidade, descricao) {
  await Database.connect();
  const result = await Database.query('INSERT INTO produtos (nome, preco, quantidade, descricao) VALUES ($1, $2, $3, $4) RETURNING *', [nome, preco, quantidade, descricao]);
  return result;
}

async function update(id, nome, preco, quantidade, descricao) {
  await Database.connect();
  const result = await Database.query('UPDATE produtos SET nome = $1, preco = $2, quantidade = $3, descricao = $4 WHERE id = $5', [nome, preco, quantidade, descricao, id]);
  return result;
}

async function remove(id) {
  await Database.connect();
  const result = await Database.query('DELETE FROM produtos WHERE id = $1', [id]);
  return result;
}

module.exports = { findAll, save, update, remove };
