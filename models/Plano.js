const mongoose=require('mongoose')

const PlanoSchema=new mongoose.Schema({
    
    name:{ type: String, required: true},
    
    minFree:{ type: Number, required: true}
    


   

})

module.exports.Plano=mongoose.model('Plano',PlanoSchema)
module.exports.PlanoSchema=PlanoSchema