const { Client } = require('pg');

class Database {
  constructor() {
    this.dbConfig = {
      host: 'localhost',
      port: 5432,
      database: 'ecommerce',
      user: 'postgres',
      password: 'luis040312',
    };
  }

  async connect() {
    try {
      const client = new Client(this.dbConfig);
      await client.connect();
      console.log('Conexão estabelecida com o banco de dados');
      return client;
    } catch (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      throw err;
    }
  }

  async disconnect(client) {
    try {
      await client.end();
      console.log('Conexão com o banco de dados encerrada');
    } catch (err) {
      console.error('Erro ao encerrar a conexão com o banco de dados:', err);
    }
  }

  async query(sql) {
    const client = await this.connect();
    try {
      const result = await client.query(sql);
      return result.rows;
    } catch (err) {
      console.error('Erro ao executar a consulta:', err);
      throw err;
    } finally {
      await this.disconnect(client);
    }
  }
}

module.exports = new Database();
