import mysql from 'mysql2';

// CONECTANDO COM O BANCO DE DADOS
export const connection = mysql.createConnection({
    host: 'host do banco de dados ',
    port: 'porta do banco de dados',
    user: 'usuario do banco de dados',
    password: 'senha do banco de dados',
    database: 'nome do banco que será utilizado'
});

  connection.connect((err) => {
    if (err) {
      // MENSAGEM A SER IMPRIMIDA NO CONSOLE EM CASO DE ERRO
      console.error('Erro ao conectar ao banco de dados:', err.stack);
      return;
    }
    
    // MENSAGEM A SER IMPRIMIDA NO CONSOLE EM CASO DE CONEXÃO BEM SUCEDIDA
    console.log('Conectado ao banco de dados.');
  });

