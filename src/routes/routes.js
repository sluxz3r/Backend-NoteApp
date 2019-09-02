const express = require('express')
const Route = express.Router()

const noteController = require('../controllers/controllers')

Route
  .get('/cat', noteController.getNote)
  .get('/category/', noteController.getCategory)
  .get('/cat/:id_note', noteController.getNoteByCat)
  .get('/:id', noteController.getNoteById)
  .post('/', noteController.postNote)
  .post('/category/', noteController.postCategory)
  .patch('/:id', noteController.editNote)

module.exports = Route
