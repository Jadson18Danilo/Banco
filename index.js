//import AlunoView from './src/models/aluno/views/index.js';
import CriarTabelas from './src/config/criar_tabelas.js';
import prompt from "prompt-sync";
const input = prompt()


async function criarTabelas(){
    try {
        await CriarTabelas.aluno()
        await CriarTabelas.professor()
        await CriarTabelas.turma()
        console.log('Tabelas criadas com sucesso!')
    } catch (error) {
        console.error('Erro ao criar tabelas:', error)
    }

}

criarTabelas()

//AlunoView.deletarTodos()