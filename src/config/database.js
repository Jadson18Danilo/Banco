// Importa o pool do pg
import pg from 'pg'

// Importa o pool do pg
const { Pool } = pg

// Cria o pool de conexões com o banco de dados
const client = new Pool({
  user: 'postgres',
  password: 'BemVindo!',
  port: '5432',
  host: 'localhost',
  database: 'postgres',
})

export default client
