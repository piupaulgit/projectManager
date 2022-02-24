exports.getAllUsers = (req,res) => {
    res.json({
        message:"all users"
    })
}

exports.register = (req,res) => {
    res.json({
        body: req.body
    })
}