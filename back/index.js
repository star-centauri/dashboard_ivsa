const express = require('express');
const cors = require('cors');
const connection = require('./database/db');
const app = express();
const port = 3000;

// Configuração do CORS
app.use(cors({
    origin: 'http://localhost:4200', // Permite apenas requisições do frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Cabeçalhos permitidos
}));

app.get('/', (req, res) => {
    const query = 'SELECT tm.nome as municipio, ti.valor FROM tb_municipio tm INNER JOIN tb_IVSA ti ON ti.municipio = tm.id;';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao executar a query:', err);
            res.status(500).send('Erro ao buscar IVSAs');
            return;
        }

        res.json(results);
    });
});

app.get('/detalhe_municipio/:municipio', (req, res) => {
    const { municipio } = req.params;
    
    if (!municipio) {
        return res.status(400).json({ error: 'Parâmetro "municipio" é obrigatório' });
    }

    query = `
        SELECT 
        tm.nome AS municipio,
        tc.nome AS criterio,
        tic.valor
        FROM tb_municipio tm
        INNER JOIN tb_IVSA ti ON ti.municipio = tm.id
        INNER JOIN tb_IVSA_criterio tic ON ti.id = tic.ivsa
        INNER JOIN tb_criterio tc ON tc.id = tic.criterio
        WHERE tm.nome = ?;
    `;

    connection.query(query, [municipio], (err, results) => {
        if (err) {
            console.error('Erro ao executar a query:', err);
            res.status(500).send('Erro ao buscar detalhes do municipio');
            return;
        }

        res.status(200).json(results);
    });
});

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`);
});