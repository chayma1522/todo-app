//3 etapes importation des routes de express
const express=require('express');
const router=express.Router();
const indexControl=require('../controllers/index.js')
const editCont=require('../controllers/Edite.js');
const { Router } = require('express');
//5 loresqu'on a un requete de l'objet get on lance un fc call back
router.get('/',indexControl.getIndex)

//7 on va recuperer les données qu'on saisie avec le body parder
router.post('/ajouter',indexControl.postIndex);
router.delete('/supprimer/:id',indexControl.deleteIndex);
router.get('/editer/:id',editCont.getEditer);
router.put('/editer/:id',editCont.putEditer)







//4 exportation des routes
module.exports = router;