import dotenv from 'dotenv'
// Importa o dotenv para carregar as variáveis de ambiente

dotenv.config()
// Carrega as variáveis de ambiente do arquivo .env

// Importa o pool do pg
import pg from 'pg'

// Importa o pool do pg
const { Pool } = pg

// Cria o pool de conexões com o banco de dados

const client = new Pool({
  user: process.env.USUARIO,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORTA, 
  database: process.env.DATABASE,
})

export default client
