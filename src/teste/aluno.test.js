const { connection, getAlunoById } = require('./db');

//TABELA DE ALUNO


describe('Testes para getAlunoById', () => {

    /* beforeAll(async () => {
         await connection.query("INSERT INTO professores (nome_professor, endereco_professor, bairro_professor, cidade_professor) VALUES ('Maria Dos Santos', 'Rua Novo Horizonte', 'Mangâlo', 'Alagoinhas')");
 
     });
     */
 
 afterAll(async () => {
     await connection.end();
 })
 
 //teste 1: leitura de dados
 //OK
 
 test( 'Retornar o usuário pelo id', async () => {
 
     const user = await getAlunoById(2);
 
     expect(user).toHaveProperty('mat_aluno', '200000');
     expect(user).toHaveProperty('nome_aluno', 'IVAN');
     expect(user).toHaveProperty('endereco_aluno', 'RUA B');
     expect(user).toHaveProperty('bairro_aluno', 'A');
     expect(user).toHaveProperty('num_aluno', '12');
     expect(user).toHaveProperty('cidade_aluno', 'ALAGOINHAS');
 
 
     console.log(`ALUNO: `, user);
 });
 
 
 
 });
 