const User = require('../models/user');
const { validationResult } = require('express-validator');

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
    const errors = validationResult(req.body)
    console.log(errors)
    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }
    const user = new User(req.body)
    user.save((err,user) => {
        if(err){
            return res.status(400).json(
                validationResult(err)
            )
        }
        res.json(user)
    })
}