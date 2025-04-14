import client from "../../../config/database.js"

class AlunoModel{
    static async criar(nome, email, matricula, telefone, cod_turma){
        const dados = [nome, email, matricula, telefone, cod_turma]
        const consulta = `insert into aluno(nome, email, matricula, telefone, cod_turma) values($1, $2, $3, $4, $5) returning *;`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }
}

AlunoModel.criar('Valtermir','valtemir1@gmail.com','a0001','84999999999',161)