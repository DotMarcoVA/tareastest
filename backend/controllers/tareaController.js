const asycnHandler = require('express-async-handler');
const Tarea = require('../models/tareaModel')

const getTareas = asycnHandler(async (req,res)=>{
  
  const tareas = await Tarea.find()

  res.status(200).json(tareas)
})

const setTareas = asycnHandler(async (req,res)=>{
  // console.log(req.body);
  if(!req.body.texto){
    res.status(400)
    throw new Error('Favor de teclear una descripcion para una tarea')
  }

  const tarea = await Tarea.create({texto: req.body.texto})

  res.status(201).json(tarea)
})

const updateTareas = asycnHandler(async (req, res) => {
  res.status(200).json({mensaje: `Modificar una tarea ${req.params.id}`})
})

const deleteTareas = asycnHandler(async (req,res)=>{
  res.status(200).json({mensaje: `Eliminando la tarea ${req.params.id}`})
})

module.exports = {
  getTareas,
  setTareas,
  updateTareas,
  deleteTareas
}