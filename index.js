import express from 'express';

const Index = express();
const PORT = 3001 || process.env.PORT;

Index.get('/', (req, res) => {
	res.send('<h1>AUDITIN BOSS</h1>');
});

Index.listen(PORT, () => console.log(`Di port ${PORT}`));