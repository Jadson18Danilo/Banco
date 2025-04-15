import AlunoController from './src/models/aluno/controller/index.js';
import CriarTabelas from './src/config/criar_tabelas.js';
import PromptSync from "prompt-sync";
const input = prompt()


async function criarTabelas(){
    await CriarTabelas.aluno()
    await CriarTabelas.professor()
    await CriarTabelas.turma()
}

criarTabelas()