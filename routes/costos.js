const express=require('express')
const router=express.Router();
const Costo=require('../models/Costo')
const Plano=require('../models/Plano')

router.get('/',async(req,res)=>{
    if (req.query.origem){
        const costos=await Costo.find({origem:req.query.origem})
        // res.json(req.query.origem)
        if (costos.length>0){    
            res.json(costos)
        }
        res.sendStatus(204)

    }else{
        const costos=await Costo.find()
        if (costos.length>0){
            res.json(costos)
        }
        res.sendStatus(204)

    }
    

})



router.post('/',async(req,res)=>{
    // const plano=await Plano.findOne({name:req.body.planoName})
    
    let costo=new Costo({
        origem:req.body.origem,
        destino:req.body.destino,
        tarifa_fixa:req.body.tarifa_fixa,
        // plano:plano
    })
    costo=await costo.save()
    res.json(costo)
})
router.delete('/',async(req,res)=>{
    const costos=await Costo.find()
    if (costos.length>0){
        
        Costo.remove().exec()
        res.sendStatus(200)
        
        

    }
    res.sendStatus(400)

    
})
module.exports=router;