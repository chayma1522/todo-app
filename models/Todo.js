 const mongoose=require('mongoose')
const toSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    }
});
module.exports= mongoose.model('doc',toSchema); 