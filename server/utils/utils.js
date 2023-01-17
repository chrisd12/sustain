import mysql from 'mysql';

export function dbQuery (sql, sqlParams,res) {
    let mysqlConnection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "sustain",
        multipleStatements: true
    })
    mysqlConnection.connect((error) => {
      if (error) {
        console.error(error);
        res.status(500).send('An error occurred while connecting to the database');
        return;
      }
      console.log('Connected to the database');
    });
  
    mysqlConnection.query(sql, sqlParams, (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).send('An error occurred while executing the query');
        return;
      }
      console.log(result);
      res.send(result);
    });
  
    mysqlConnection.end();
}