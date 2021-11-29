const authorize = (req,res,next) => {
    const {user} = req.query
    if(user === 'Dip'){
        req.user = {name:'Dip',id:13}
        next()
    }
    else{
        res.status(401).send(`Unauthorize`)
        next()
    }
}
module.exports = authorize