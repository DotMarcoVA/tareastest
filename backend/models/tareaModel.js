const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
  texto: {
    type: String,
    required: [true, 'Teclea una tarea']
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Tarea', tareaSchema)