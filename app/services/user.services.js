var User = require('../Models/note.model');
exports.createUser = (req,res)=>{
    if(!req.body.name){
        return res.status(400).send({
            message:'note content not be empty'
        })
    }
    const user = new User({
        name:req.body.name,
        city:req.body.city

    })
    user.save()
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || 'something err occured'
        })
    })
}
exports.checkUser = (req,res)=>{
    if(req.body.name==note){
        return res.status(400).send({
            message:'name'
        })
    }
    const user= new User({
        name:req.body.name,
        city:req.body.city

    })
    user.save()
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || 'something err occured'
        })
    })
}


exports.findUser = function(req,res){
    User.find()
    .then(user=>{
        res.send(user);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || 'something err occured'
        })
    })
}

exports.createUniquerecord = function(req,res){
    User.findOne({ name: req.body.name ,city: req.body.city})
    .then((user)=>{
        if(user){
            res.send({
                message:'user already exist'
            })

        }
        else{
            const user = new User({
                name:req.body.name,
                city:req.body.city
        
            })
            user.save()
            .then(data=>{
                res.send(data);
            })
            .catch(err=>{
                res.status(500).send({
                    message:err.message || 'something err occured'
                })
            })            
        }
    })
}

exports.findOne = (req,res)=>{
    User.findById(req.params.id)
    .then(data=>{
        if(data){
            res.send(data);
        }
        else{
            res.status(400).send({
                message:"note not found"
            })
        }
    }).catch(err=>{
        res.send(err)
    })
}

exports.updateUser =(req,res)=>{
    if(!req.body.name){
        return res.status(400).send({
            message:'note content not be empty'
        })

    }
    User.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
        city:req.body.city
    },{new:true})
    .then(data=>{
        if(data){
            res.send(data)
        }
        else{
            return res.status(400).send({
                message:'note not found'
            })
        }
    }).catch(err=>{
        res.send(err)
    })
}

exports.delete = (req,res)=>{
    User.findByIdAndRemove(req.params.id)
    .then(status=>{
        if(status){
            res.send({
                message:'record deleted successfully'
            })

        }
        else{
            res.send({
                message:'record not found'
            })
        }
    }).catch(err=>{
        res.send(err);
    })
}