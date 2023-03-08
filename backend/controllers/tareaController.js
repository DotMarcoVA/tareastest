const getTareas =  (req,res)=>{
  res.status(200).json({mensaje: 'Mostrar tareas'})
}

const setTareas = (req,res)=>{
  // console.log(req.body);
  if(!req.body.nombre){
    res.status(400)
    throw new Error('Favor de teclear una descripcion para una tarea')
  }
  res.status(201).json({mensaje: 'Crear una tarea'})
}

const updateTareas = (req, res) => {
  res.status(200).json({mensaje: `Modificar una tarea ${req.params.id}`})
}

const deleteTareas = (req,res)=>{
  res.status(200).json({mensaje: `Eliminando la tarea ${req.params.id}`})
}

module.exports = {
  getTareas,
  setTareas,
  updateTareas,
  deleteTareas
}