const express=require('express')
const router=express.Router();
const {Plano,PlanoSchema}=require('../models/Plano')


router.get('/',async(req,res)=>{
    
    const planos=await Plano.find()
    if (planos.length>0){
        res.json(planos)
    }
    res.sendStatus(204)

})
router.post('/',async(req,res)=>{
    let plano=new Plano({
        name:req.body.name,
        minFree:req.body.minFree
    })
    plano=await plano.save()
    res.json(plano)
})
router.delete('/',async(req,res)=>{
    const planos=await Plano.find()
    if (planos.length>0){
        
        Plano.remove().exec()
        res.sendStatus(200)
        
        

    }
    res.sendStatus(400)

    
})
module.exports=router;