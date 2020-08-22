var express = require('express');
const router = express.Router();
var noteController = require('../controller/note.controller');
 var expressValidator = require('express-validator');
router.use(expressValidator())
router.post('/unique',noteController.note_check)
router.post('/',noteController.note_create)
router.get('/',noteController.findNotes)
router.get('/:id',noteController.findOne)
router.put('/:id',noteController.updateNote)
router.delete('/:id',noteController.delete)

module.exports=router
