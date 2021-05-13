var express = require('express')
const router = express.Router()
const SECRET_KEY="SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
var jwt=require('jsonwebtoken');
const controller=require('../controller/controller')

router.post('/signup',(req,res)=>{

controller.signup(req.body).then((result)=>{

    console.log(result);
if(result=='notExist')
{
    result=true
    res.status(200).send(result)
}
else
{
    result=false;
    res.status(200).send(result)

}
})


})

router.post('/Login',(req,res)=>{
    controller.Login(req.body).then((result)=>{

        console.log(result);
        if(result.user)
        {
            
            let jwtToken = jwt.sign(result.user,SECRET_KEY)
            res.status(200).send({user:result.Username,id:result.user._id,jwtToken})
        }
        else if(result.invalidUser)
        {
res.send(result)
        }
        else if(result.passwordInvalid)
        {
res.send(result)
        }
    })
})



module.exports = router