const User = require('../models/user');
const jwtToken = require('jsonwebtoken')
const expressJwt = require('express-jwt');

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
        if(user){
            if(!user.authenticated(password)){
                return res.status(401).json({
                    "error": "Email address and password does not match any account."
                })
            }
            const token = jwtToken.sign({_id:user._id}, process.env.SECRET)
            res.cookie("token", token, {expire: new Date() + 9999})

            return res.json({
                "token" :token,
                "user" : user
            })
        }
        else{
            return res.json({
                "user" : "Email address not found in DB."
            })
        }
        
    })
}