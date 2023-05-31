const express = require('express')
const checklistRouter = require('./src/routes/checklist.js')
require('./config/database.js')

const app = express()
app.use(express.json())
app.use('/checklists', checklistRouter)

app.get('/', (req, res) => {
  res.send('<h1>Minha lista de tarefas</h1>')
})

app.get('/json', (req, res) => {
  res.json({ title: 'Tarefa X', done: true })
})

app.listen(3003, () => {
  console.log('Servidor foi iniciado...')
})