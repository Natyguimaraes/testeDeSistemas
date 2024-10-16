const mysql = require('mysql2/promise');


const connection = mysql.createPool({
    host: 'localhost',
    user:'root',
    password:'123456789',
    database: 'escola_bd'
})

async function getUserById(id) {
    const [rows] = await connection.query('SELECT * FROM professores WHERE idprofessores = ?', [id]);
    return rows [0];

    
}

async function getAlunoById(id) {
    const [rows] = await connection.query('SELECT * FROM alunos WHERE idalunos = ?', [id]);
    return rows [0];
}

module.exports = { getUserById, getAlunoById, connection };
