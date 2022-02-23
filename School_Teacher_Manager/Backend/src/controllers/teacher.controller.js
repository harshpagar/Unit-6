const express = require("express")

const Teacher = require('../models/Teacher.model')

const router = express.Router()

router.post('/', async(req, res) => {
    try{
        const teacher = await Teacher.create(req.body)
        res.status(200).send(teacher)
    }catch(e){
        return res.status(500).json({ status: "Failed", Message: e.message });
    }
})

router.get("/", async(req, res) => {
    try{
        const teachers1 = await Teacher.find().lean().exec()
        return res.status(201).send(teachers1)
    }catch(e){
        return res.status(500).json({ status: "Failed", Message: e.message });
    }
})



module.exports = router