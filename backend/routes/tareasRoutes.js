const express = require('express');
const router = express.Router();
const {getTareas, setTareas, updateTareas, deleteTareas} = require('../controllers/tareaController') 

router.route('/').get(getTareas).post(setTareas)
router.route('/:id').put(updateTareas).delete(deleteTareas)
/* 
router.get('/', getTareas)
router.post('/', setTareas)
router.put('/:id', updateTareas)
router.delete('/:id', deleteTareas)
 */
module.exports = router;