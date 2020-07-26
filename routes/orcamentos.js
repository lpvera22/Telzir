const express=require('express')
const router=express.Router();
const Costo=require('../models/Costo')
const {Plano,PlanoSchema}=require('../models/Plano')

router.post('/',async(req,res)=>{
    console.log(req.body)
    let tarifa=await Costo.find({origem:req.body.origem,destino:req.body.destino})

    tarifa=tarifa[0].tarifa_fixa

    let aux=[]
    aux.push({nome:'Sem Plano',valor:req.body.minutos*tarifa})

    const planos=await Plano.find() 

    planos.forEach(p => {        
        let minutos_cobrados = req.body.minutos - p.minFree
        
        aux.push({nome: p.name, valor: (minutos_cobrados > 0 ? tarifa * 1.1 * minutos_cobrados : 0) })
    });

    res.json(aux)

})

module.exports=router;