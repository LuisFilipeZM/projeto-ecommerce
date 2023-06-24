const { Client } = require('pg');

class Database {
  constructor() {
    this.client = new Client({
      host: 'localhost',
      port: 5432,
      database: 'ecommece',
      user: 'postgres',
      password: 'luis040312',
    });
  }

  async connect() {
    try {
      await this.client.connect();
      console.log('Conexão estabelecida com o banco de dados');
    } catch (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
    }
  }

  async disconnect() {
    try {
      await this.client.end();
      console.log('Conexão com o banco de dados encerrada');
    } catch (err) {
      console.error('Erro ao encerrar a conexão com o banco de dados:', err);
    }
  }

  async query(sql) {
    try {
      const result = await this.client.query(sql);
      return result.rows;
    } catch (err) {
      console.error('Erro ao executar a consulta:', err);
      throw err;
    }
  }
}


module.exports = new Database();