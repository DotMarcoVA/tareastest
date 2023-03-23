const asycnHandler = require('express-async-handler');
const Tarea = require('../models/tareaModel')

const getTareas = asycnHandler(async (req,res)=>{
  
  const tareas = await Tarea.find({user: req.user.id})

  res.status(200).json(tareas)
})

const setTareas = asycnHandler(async (req,res)=>{
  // console.log(req.body);
  if(!req.body.texto){
    res.status(400)
    throw new Error('Favor de teclear una descripcion para una tarea')
  }

  const tarea = await Tarea.create({
    texto: req.body.texto,
    user: req.user.id
  })

  res.status(201).json(tarea)
})

const updateTareas = asycnHandler(async (req, res) => {
  // Recibir tarea por ID
  const tarea = await Tarea.findById(req.params.id)
  // Verificar que la tarea exista
  if(!tarea){
    res.status(400)
    throw new Error('No se encontro la tarea solicitada')
  }

  // Verificar que la tarea pertenezca al usuario del token
  if(tarea.user.toString() !== req.user.id){
    res.status(400)
    throw new Error('Acceso no autorizado')
  }
  // Modificar tarea
  const tareaModificada = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new: true})

  res.status(200).json(tareaModificada)
})

const deleteTareas = asycnHandler(async (req,res)=>{
  const tarea = await Tarea.findById(req.params.id)
  if(!tarea){
    res.status(400)
    throw new Error('No se encontro la tarea solicitada')
  }

  if(tarea.user.toString() !== req.user.id){
    res.status(400)
    throw new Error('Acceso no autorizado')
  }

  // await Tarea.remove
  const tareaBorrada = await Tarea.findByIdAndDelete(req.params.id)

  res.status(200).json({mensaje: `Eliminando la tarea ${req.params.id}`})
})

module.exports = {
  getTareas,
  setTareas,
  updateTareas,
  deleteTareas
}