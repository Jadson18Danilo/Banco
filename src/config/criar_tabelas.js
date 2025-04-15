import client from '../database.js';

class CriarTabelas{
    static async aluno(){
        const consulta = `create table if not exists aluno(
        nome varchar(100) not null, 
        email varchar(100) not null, 
        matricula char(5) not null unique, 
        telefone char(11) not null, 
        cod_turma integer not null references turma(cod_turma),
        )`
        await client.query(consulta)
        console.log('Tabela aluno criada com sucesso!')
    }

    static async professor(){
        const consulta = `create table if not exists turma(
            nome varchar(100) not null, 
            matricula char(5) not null unique,
            cod_turma integer not null references turma(cod_turma),
        )`
        await client.query(consulta)
        console.log('Tabela professor criada com sucesso!')
    }

    static async turma(){
        const consulta = `create table if not exists turma(
            id serial primary key, 
            nome_turma varchar(100) not null,
        )`
        await client.query(consulta)
        console.log('Tabela turma criada com sucesso!')
    }
}

export default CriarTabelas;
// import PromptSync from "prompt-sync";