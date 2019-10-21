import mysql from 'mysql';

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'audit_in',
  multipleStatements: true
});

conn.connect(err => {
  if (err) throw err;
  console.info('Koneksi ges');
});

export default conn;
