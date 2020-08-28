const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  port     : 32777,
  user     : 'root',
  password : 'root',
  database : 'db_locadora'
});
 

connection.connect(function(err){
  if(err) return console.log(err);
  console.log('conectou!');
  createTable(connection);
})

function addRows(conn){
  const sql = "INSERT INTO Users(CPF, Nome, Email, Telefone) VALUES ?";
  const values = [
        ['teste1', '12345678901'],
        ['teste2', 'Nome Teste'],
        ['teste3', 'teste@teste'],
        ['teste4', '11922222222']
      ];
  conn.query(sql, [values], function (error, results, fields){
          if(error) return console.log(error);
          console.log('adicionou registros!');
          conn.end();//fecha a conexão
      });
}

function createTable(conn){

      const sql = "CREATE TABLE IF NOT EXISTS USERS (\n"+
                  "Nome varchar(150) NOT NULL,\n"+
                  "CPF char(11) NOT NULL,\n"+
                  "Email varchar(100) NOT NULL,\n"+
                  "telefone varchar(12) NOT NULL,\n"+
                  "PRIMARY KEY (CPF)\n"+

                  ");";
      
      conn.query(sql, function (error, results, fields){
          if(error) return console.log(error);
          console.log('criou a tabela!');
          addRows(conn);
      });
}