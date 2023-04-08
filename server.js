import express from 'express';
const app = express();


// IMPORTA O BANCO DE DADOS DO DIRETORIO SRC
import { connection } from './src/database/db.js'


import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// REDIRECIONA AO DIRETORIO BUILD, QUE CONTEM O ARQUIVO INDEX.HTML
//(UTILIZE NPM RUN BUILD QUANDO SEU PROJETO REACT ESTIVER FINALIZADO, ISSO CRIARA UMA PASTA COM SEUS ARQUIVOS OTIMIZADOS)
app.use(express.static('build'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});



// INICIA O SERVIDOR NODE
app.listen(3000, () => {
  console.log('Server running on port 3000.');
});


// import bodyParser from 'body-parser'
// app.use(bodyParser.json());

// app.post('/api/salvar-informacao', (req, res) => {
  //   const { informacao } = req.body;
  //   const sql = 'INSERT INTO cliente (nome) VALUES ("a")';
  //   connection.query(sql, [informacao], (err, result) => {
  //     if (err) {
  //       console.error(err);
  //       res.status(500).send('Erro ao salvar informação');
  //     } else {
  //       console.log('Informação salva com sucesso');
  //       res.status(200).send('Informação salva com sucesso');
  //     }
  //   });
  // });
  