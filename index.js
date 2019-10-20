import express from 'express';
import Route from './route/routes';

const Index = express();
const PORT = 3001 || process.env.PORT;

Index.set('view engine', 'ejs');
Index.use('/', Route)
		.listen(PORT, () =>	
			console.log(`Di port ${PORT}`)
	);
