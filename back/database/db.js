// db.js
const mysql = require('mysql2');

// Configurações da conexão
const connection = mysql.createConnection({
  host: 'database',      // Nome do serviço no Docker Compose
  user: 'tcc',           // Usuário definido no environment do MySQL
  password: '20251',     // Senha definida no environment do MySQL
  database: 'db_ivsa'    // Nome do banco de dados
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
    return;
  }
  console.log('Conectado ao banco de dados com o ID:', connection.threadId);
});

// Exportar a conexão para ser usada em outros arquivos
module.exports = connection;