
const { findByIdAndDelete } = require('../models/Todo.js');
const Todo=require('../models/Todo.js');
//recuperer la page d'acceuil
 const getIndex=(req,res)=>{
Todo.find({},(err,docs)=>{
 if(err)
  console.log(err)
  res.render('index',{
    docs:docs
  });
   
}) 

}  
    ;

const postIndex=(req,res)=>{
   const newTodo= new Todo({
    title:req.body.title
   })
  newTodo.save((err)=>{
  if (err)
    console.log(err)
    res.redirect('/')
  })
   
}
const deleteIndex=(req,res)=>{
const{id}=req.params
 Todo.findByIdAndDelete(id,(err)=>{
  if (err)console.log(err);
  res.redirect('/');
});

}

module.exports={
    getIndex:getIndex,
    postIndex:postIndex,
    deleteIndex:deleteIndex
}