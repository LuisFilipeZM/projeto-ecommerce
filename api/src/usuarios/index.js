const Database = require('../connection');

async function findAll() {
  const result = await Database.query('SELECT * FROM usuario');
  return result;
}

async function findOne(id) {

    const result = await Database.query('SELECT * FROM usuario WHERE id = ' + id);
    console.log(result, id);
    return result[0];

  }

async function save(nome, cpf, email, senha, data_nascimento) {
  const query = {
    text: 'INSERT INTO usuario (nome, cpf, email, senha, data_nascimento) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    values: [nome, cpf, email.toLowerCase().trim(), senha.trim(), data_nascimento],
  }
  const result = await Database.query(query);
  return result;
}

async function update(id, nome, cpf, email, senha, data_nascimento) {
  const query = {
    text: 'UPDATE usuario SET nome = $1, cpf = $2, email = $3, senha = $4, data_nascimento = $5 WHERE id = $6',
    values: [nome, cpf, email, senha, data_nascimento, id],
  }
  const result = await Database.query(query);
  return result;
}

async function remove(id) {
  const result = await Database.query('DELETE FROM usuario WHERE id = $1', [id]);
  return result;
}

async function login(email, senha) {

    const query = {
        text: 'SELECT * FROM usuario WHERE LOWER(TRIM(email)) = LOWER($1) AND TRIM(senha) = $2',
        values: [email.toLowerCase().trim(), senha.trim()],
      }
    const result = await Database.query(query);
    
    return result[0];
}

module.exports = { findAll, save, update, remove, findOne, login };
