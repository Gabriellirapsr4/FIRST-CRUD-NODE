import express from 'express'
import routes from './routes.js';

const app = express()

//
app.use(express.json())

// usar o routes
app.use(routes)

//indicar para o express ler body com json
export default app
