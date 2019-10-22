import express from 'express';
import mailer from 'nodemailer';
import db from '../database/mysql';

const Route = express.Router();

Route.get('/', (req, res) => res.render('_home'));
Route.get('/aula', (req, res) => res.render('aula'));
Route.get('/login', (req, res) => res.render('login'));
Route.get('/bantuan', (req, res) => res.render('bantuan'));
Route.get('/tim', (req, res) => res.render('tim'));

Route.post('/kirimEmail', (req, res) => {
  let transporter = mailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: 'emailnya@email.com', //email pengirim
      pass: 'password.email' //pass pengirim
    }
  });
  let pengaturanEmail = {
    from: req.body.from,
    to: 'tujuan@email.com', //tujuan kirim email
    subject: req.body.subject,
    text: req.body.body
  };

  transporter.sendMail(pengaturanEmail, (err, info) => {
    if (err) throw err;
    res.redirect('/');
  });
});

export default Route;
