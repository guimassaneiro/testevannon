const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000; 
const mysql      = require('mysql');

//Teste: Guilherme


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
router.get('/users/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM Users' + filter, res);
});
router.delete('/users/:id', (req, res) =>{
    execSQLQuery('DELETE FROM users WHERE ID=' + parseInt(req.params.id), res);
});
router.post('/users', (req, res) =>{
    const nome = req.body.nome.substring(0,150);
    const cpf = req.body.cpf.substring(0,11);
    execSQLQuery(`INSERT INTO Users(Nome, CPF) VALUES('${nome}','${cpf}')`, res);
});
router.patch('/users/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const nome = req.body.nome.substring(0,150);
    const cpf = req.body.cpf.substring(0,11);
    execSQLQuery(`UPDATE Users SET Nome='${nome}', CPF='${cpf}' WHERE ID=${id}`, res);
});
app.use('/', router);


app.listen(port);
console.log('API funcionando!');

function execSQLQuery(sqlQry, res){
  const connection = mysql.createConnection({
    host     : 'localhost',
    port     : 32777,
    user     : 'root',
    password : 'root',
    database : 'db_locadora'
  });

  connection.query(sqlQry, function(error, results, fields){
      if(error) 
        res.json(error);
      else
        res.json(results);
      connection.end();
      console.log('executou!');
  });
}