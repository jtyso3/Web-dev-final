let express = require('express')
let Sequelize = require('sequelize')
let db = require('../models')
let Activity = db.Activity

let router = express.Router()

// get request. retrieves data from server. Does this need to point to model file?
router.get('/activity', (req, res, next)=>{
    Activity.findAll().then( records =>{
        return res.json(records)
    }).catch(err => next(err))
})

// POST request. sends data to the sever.
router.post('/activity', (req, res, next) =>{
    Activity.create(req.body).then( (data) => {
        return res.status(201).send('ok')
    }).catch( err => {
        if (err instanceof Sequelize.ValidationError){
            let message = err.errors.map( e => e.message )
            return res.status(400).json(message)
        }
        return next(err)
    })
})

module.exports = router
