const express = require('express')
const path = require('path')

const checklistRouter = require('./src/routes/checklist.js')
const rootRouter = require('./src/routes/index.js')

require('./config/database.js')


const app = express()
app.use(express.json())

app.use('/', rootRouter)
app.use('/checklists', checklistRouter)

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

app.listen(3003, () => {
  console.log('Servidor foi iniciado...')
})