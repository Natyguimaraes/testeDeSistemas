const { connection, getUserById } = require('./db');

describe('Testes para getUserById', () => {

    //TESTE DE INTEGRAÇÃO: Verificando se o sistema está inserindo novos dados no banco de dados.
    //OK

    beforeAll(async () => {
        await connection.query("INSERT INTO professores (nome_professor, endereco_professor, bairro_professor, cidade_professor) VALUES ('Maria Dos Santos', 'Rua Novo Horizonte', 'Mangâlo', 'Alagoinhas')");

    });

afterAll(async () => {
    await connection.end();
})

//teste 1: leitura de dados
//OK

test( 'Retornar o usuário pelo id', async () => {

    const inicio = performance.now();
    const user = await getUserById(1);
    const fim = performance.now();
    const duracao = fim - inicio;
    console.log(`Tempo de execução: ${duracao.toFixed(2)} ms`);

    expect(user).toHaveProperty('nome_professor', 'marcos');
    expect(user).toHaveProperty('endereco_professor', 'av linha verde');
    expect(user).toHaveProperty('bairro_professor', 'nova alagoinhas');
    expect(user).toHaveProperty('cidade_professor', 'alagoinhas');
    
    expect(duracao).toBeLessThanOrEqual(50);

    console.log(`Professor: `, user);
});

//verficar se os campos não estão vazios

test('Garantir que o campo nome não seja null ou undefined', async () => {
    const user = await getUserById(1);
    expect(user.nome_professor).not.toBeNull();
    expect(user.nome_professor).not.toBeUndefined();

    console.log('Os campos não estão vazios');
});


test('Verificar o número máximo de caracteres no campo de nome_professor', async () => {
    const user = await getUserById(1);

    expect(user.nome_professor.length).toBeLessThanOrEqual(150);

    console.log('Correto');
});

});



