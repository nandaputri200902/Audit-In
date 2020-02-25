import express from 'express';
// import db from './database/mysql';
import session from 'express-session';
import bodyParser from 'body-parser';
import Route from './route/routes';

const Index = express();
const PORT = 3001 || process.env.PORT;

Index.use(
  session({
    secret: 'secret',
    resave: true, 
    saveUninitialized: true
  })
);

Index.use(bodyParser.json());
Index.use(bodyParser.urlencoded({ extended: false }));

Index.set('view engine', 'ejs');
Index.use(express.static('public'));
Index.use('/', Route);

Index.listen(PORT, () => console.log(`Di port ${PORT}`));
