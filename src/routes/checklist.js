const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  console.log('Olá')
  res.send()
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.status(200).json(req.body)
})

router.get('/:id', (req, res) => {
  console.log(req.params.id)
  res.send(`GET ID: ${req.params.id}`)
})

router.put('/:id', (req, res) => {
  console.log(req.body)
  res.send(`PUT ID: ${req.params.id}`)
})

module.exports = router