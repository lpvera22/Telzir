const express=require('express')
const router=express.Router();
const Costo=require('../models/Costo')
const Plano=require('../models/Plano')



router.get('/',async(req,res)=>{   
        

    let aux=[]
        
    const costos=await Costo.find()
    
    if (costos.length>0){
        

        for (var i = 0; i < costos.length; i++) {
            
            if (!(aux.includes(costos[i].origem)))
                aux.push(costos[i].origem)

            
        }
        res.json(aux)
    }
    
    res.sendStatus(204)

})

module.exports=router;