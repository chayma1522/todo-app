const express= require('express');
const app =express ();
const  mongoose=require('mongoose')
const bodyParser=require('body-parser')
const methodOverride=require('method-override')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'));
  mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser:true} ).then(()=>
{console.log('server started')})  
// 3 on va integrer le moteur de template pug 
app.set('view engine','pug')
//6on souhaite utiliser le routeur lorsqu'on est a la racine
const indexRoute=require('./routes/index.js');
//7 lorsqu'on est a la racine on veur utiliser le routeur qu'on a importé au dessus
app.use('/',indexRoute);





const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`run port ${port}`))