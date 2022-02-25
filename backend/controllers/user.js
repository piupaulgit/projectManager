const User = require('../models/user');


exports.getAllUsers = (req,res) => {
    const user = new User(req.body)
    user.save((err,user) => {
        if(err){
            return res.status(400).json({
                err: "Unable to add user in the DB"
            })
        }
        res.json(user)
    })
    res.json({
        message:"all users"
    })
}

exports.register = (req,res) => {
    res.json({
        body: req.body
    })
}