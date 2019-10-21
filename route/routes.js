import express from 'express';
import db from '../database/mysql';

const Route = express.Router();

Route.get('/', (req, res) => res.render('_home'));
Route.get('/aula', (req, res) => res.render('aula'));
Route.get('/login', (req, res) => res.render('login'));
Route.get('/bantuan', (req, res) => res.render('bantuan'));
Route.get('/tim', (req, res) => res.render('tim'));

export default Route;
