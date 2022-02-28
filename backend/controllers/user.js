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
    const user = new User(req.body)
    user.save((err,user) => {
        if(err){
            return res.status(400).json({
                "error": err
            })
        }
        res.json(user)
    })
}

exports.login = (req,res) => {
    const {emailId, password} = req.body;
    User.findOne({emailId}, (err, user) => {
        if(err){
            return res.json({
                "error" : err
            })
        }
        return res.json({
            "user" : user
        })
    })
}