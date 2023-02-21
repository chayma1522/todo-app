const Todo=require('../models/Todo.js')

const getEditer=(req,res)=>{
 const {id}=req.params
 Todo.findById(id, (err,doc)=>{
    
    if(err)console.log(err)
    console.log(doc)
    res.render('edit',{
        doc:doc
    })
})
   
}
const putEditer=(req,res)=>{
    const {id}=req.params
    const{title}=req.body
   Todo.findByIdAndUpdate(id,{title:title},(err)=>{
if (err)console.log(err)
res.redirect('/');
   })
   

}
module.exports = {
    getEditer:getEditer,
    putEditer:putEditer

}