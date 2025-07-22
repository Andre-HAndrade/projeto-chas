import express from 'express';

const port = 3000;
const app = express();

// GET, POST, PUT, PATCH, DELETE

app.get('/plants', (req, res) => {
  res.send('Listagem de plantas');
});

app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`);
});
