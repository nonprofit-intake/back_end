exports.login = (req, res, next) => {
    console.log(req.body)
    res.send('login')
}

exports.register = (req, res, next) => {
    console.log(req.body)
    res.send('register')
}