const express=require('express')
const planos =require('./routes/planos')
const costo =require('./routes/costos')
const origems =require('./routes/origems')
const orcamentos =require('./routes/orcamentos')
module.exports=function(app){
    app.use('/api/planos',planos)
    app.use('/api/costos',costo)
    app.use('/api/origems',origems)
    app.use('/api/orcamentos',orcamentos)
    
}