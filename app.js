const express = require('express')
const path = require('path')
const methodOverride = require('method-override')

const checklistRouter = require('./src/routes/checklist.js')
const rootRouter = require('./src/routes/index.js')
const TaskRouter = require('./src/routes/task.js')

require('./config/database.js')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method', {methods: ["POST", "GET"]}))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', rootRouter)
app.use('/checklists', checklistRouter)
app.use('/checklists', TaskRouter.checklistsDependent)
app.use('/tasks', TaskRouter.simple)

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

app.listen(3003, () => {
  console.log('Servidor foi iniciado...')
})
