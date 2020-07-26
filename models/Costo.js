const mongoose=require('mongoose')
const {Plano,PlanoSchema}=require('./Plano.js')
var SchemaTypes = mongoose.Schema.Types;

const CostoSchema=new mongoose.Schema({
    
    origem:{ type: String, required: true},
    destino:{ type: String, required: true},
    tarifa_fixa:{ type: SchemaTypes.Decimal128, required: true},
    // plano:{ type: PlanoSchema},


   

})

module.exports=mongoose.model('Costo',CostoSchema)