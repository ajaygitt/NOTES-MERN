var db = require('../model/connection')
var collection=require('../model/collections')
var bcrypt=require('bcrypt')
var moment =require('moment')
const { NOTES_COLLECTION } = require('../model/collections')
const { ObjectID } = require('bson')

module.exports={

    signup: (userData) => {
        console.log(userData);
        status = {};
        return new Promise(async (resolve, reject) => {
          let Username = await db.get().collection(collection.USER_COLLECTION).findOne({ Username: userData.User });
          if (Username) {
            status = 'exist'
            resolve(status)
          }
         else {
            userData.Password = await bcrypt.hash(userData.Password, 10)
         
            status.insert = true
            db.get().collection(collection.USER_COLLECTION).insertOne({Username:userData.User,Password:userData.Password}).then(() => {
             status='notExist'
              resolve(status);
            });
          }
        });
      },
    

      
  Login:(userData)=>{
      console.log(userData);
    let status={}
        return new Promise(async(resolve,reject)=>{
    
          let user=await db.get().collection(collection.USER_COLLECTION).findOne({Username:userData.User})
    
          if(user)
          {
         
            bcrypt.compare(userData.Password, user.Password).then((response)=>{
    
    if(response)
    {
       status.user=user
       console.log("ok user loged");
    resolve(status)
    
    }
    else
    {
        console.log('pwd err');
      status.passwordInvalid=true
      resolve(status)
    }
    
    
            })
          }
    
          else
          {
              console.log("nouser");
    status.invalidUser=true
            resolve(status)
          }
    
    
        })
    
    
      },


      addNewNote:(data,userId)=>{
        let date=moment(new Date()).format('DD/MM/YYYY')
        let time=moment(new Date()).format('hh:mm:a')
        console.log("inseid id",userId);
        return new Promise((resolve,reject)=>{
          db.get().collection(collection.NOTES_COLLECTION).insertOne({userId:userId,title:data.title,notes:data.notes,date:date,time:time}).then(()=>{

            resolve()
          })
        })
      },


      getMyNotes:(id)=>{
        return new Promise((resolve,reject)=>{

          db.get().collection(collection.NOTES_COLLECTION).find({userId:id}).toArray().then((result)=>{

            resolve(result)
          })
        })
      },

      deleteNote:(id)=>{

        db.get().collection(NOTES_COLLECTION).removeOne({_id:ObjectID(id)}).then(()=>{

          return true;
        })
      }


}