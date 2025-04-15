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
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, 
  database: process.env.DB_NAME
})

export default client
