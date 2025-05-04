const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Configuração para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal que serve o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota de API de exemplo
app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    server: 'Express no Termux',
    port: port,
    timestamp: new Date().toISOString()
  });
});

// Middleware para tratamento de erros 404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log(`Para acessar externamente, use o endereço IP do seu dispositivo`);
});