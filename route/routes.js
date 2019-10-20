import express from 'express';

const Route = express.Router();

Route.get('/', (req, res) => res.render('_landing'));
Route.get('/home', (req, res) => res.render('_home'));
Route.get('/login', (req, res) => res.render('login'));
Route.get('/tentang', (req, res) => res.render('tentang'));


export default Route;