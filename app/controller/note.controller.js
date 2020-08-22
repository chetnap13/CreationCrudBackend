const noteService = require('../services/note.services');
exports.note_create = function(req,res,next){
    try {
        req.assert('name','name must be atleast three charactors').len(3);
        req.assert('city','city should nt be empty').notEmpty();
        
        var errors = req.validationErrors();
        if(errors)
        {
            return res.status(400).send(errors)
        }
        else{
            noteService.createNote(req,res)
        }
    } catch (error) {
        res.send(error)
    }
}
exports.note_check = function(req,res,next){
    try {
        req.assert('name','name length should b atleast 3 charactor').len(3);
        
        
        var errors = req.validationErrors();
        if(errors)
        {
            return res.status(400).send(errors)
        }
        else{
            noteService.createUniquerecord(req,res)
        }
    } catch (error) {
        res.send(error)
    }
}

exports.findNotes = function(req,res){
    
   return noteService.findNotes(req,res)
    
}

exports.findOne = function(req,res){
    req.assert('id','id cant be empty').notEmpty();
    let errors = req.validationErrors();
    if(errors)
    {
        res.status(400).send(errors)
    }
    else{
        noteService.findOne(req,res)
    }
}

exports.updateNote = function(req,res,next){
    try {
        req.assert('name','name must be atleast three charactors').len(3);
        req.assert('city','city should nt be empty').notEmpty();
        req.assert('id','id cant be empty').notEmpty();
        var errors = req.validationErrors();
        if(errors)
        {
            return res.status(400).send(errors)
        }
        else{
            noteService.updateNote(req,res)
        }

    } catch (error) {
        res.send(error)
    }
}

exports.delete = function(req,res){
    req.assert('id','id cant be empty').notEmpty();
    let errors = req.validationErrors();
    if(errors)
    {
        res.status(400).send(errors)
    }
    else{
        noteService.delete(req,res)
    }
}
