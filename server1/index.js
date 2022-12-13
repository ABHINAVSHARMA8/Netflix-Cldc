const express = require('express');
const MongoClient = require('mongodb').MongoClient
const cors=require('cors')
const bp = require("body-parser")

const app1 = express();

const url = 'mongodb://127.0.0.1:27017'

let dbname 

let db
const client = new MongoClient(url);

// Start server on PORT 5001
app1.listen(5001, err =>{
    err ?
    console.log("Failed to listen on PORT 5001"):
    console.log("Application Server listening on PORT 5001");
});


app1.post('/log_in/:username/:password',cors(),async function(req,res,next){

    username = req.params.username;

    console.log("username is "+username)

    pword = req.params.password;

    console.log("password search is "+pword)

    dbname = "netflix_log_in"
    

    db=client.db(dbname)

    db.stats(function (err, result) {
        if(result['collections']==0){  // Database Avaialability
            dbname="netflix_log_in_2"
            db=client.db(dbname)
        }
     });

  

     db.collection('user').find({uname:"abcd"}).toArray(function(err,result){

         if(err) console.log(err)

     })

     try {
        console.log("Inside try login ")
       
       var user = await db.collection('user').find({uname:username,password:pword}).toArray();

       console.log(user.length)

        if(user.length==0) res.send({"exists":"false"})

        else res.send({"exists":"true"})

        
       
      
  
      
  } catch (err) {
      return res.status(500);
  }
  
})

app1.post('/change_password/:username/:password/:new_password',cors(),async function(req,res,next){

    username = req.params.username;

    console.log("username is "+username)

    pword = req.params.password;

    console.log("password search is "+pword)

    newpword = req.params.new_password;
    console.log("new password search is "+newpword)


    dbname = "netflix_log_in"
    

    db=client.db(dbname)

    db.stats(function (err, result) {
        if(result['collections']==0){  // Database Avaialability
            dbname="netflix_log_in_2"
            db=client.db(dbname)
        }
     });

  

     db.collection('user').find({uname:"abcd"}).toArray(function(err,result){

         if(err) console.log(err)

     })

     try {
        console.log("Inside try login ")
       
       var user = await db.collection('user').find({uname:username,password:pword}).toArray();

       console.log(user.length)

        if(user.length==0) res.send({"changed":"false"})

        var myquery = { uname:username,password:pword };
        var newvalues = { $set: { password: newpword } };
        db.collection("user").updateOne(myquery, newvalues);

        res.send({"changed":"true"});

        if(dbname=="netflix_log_in"){

            console.log("netflix log in 2")
            dbname="netflix_log_in_2"
            db=client.db(dbname)
            db.collection("user").updateOne(myquery, newvalues);

        }

        else if(dbname=="netflix_log_in_2"){

            dbname="netflix_log_in"
            db=client.db(dbname)
            db.collection("user").updateOne(myquery, newvalues);



        }


            

        
       
      
  
      
  } catch (err) {
      return res.status(500);
  }
  
})


app1.post('/sign_up/:username/:password',cors(),async function(req,res,next){

    username = req.params.username;

    console.log("username is "+username)

    pword = req.params.password;

    console.log("password search is "+pword)

    dbname = "netflix_log_in"
    

    db=client.db(dbname)

    db.stats(function (err, result) {
        if(result['collections']==0){  // Database Avaialability
            dbname="netflix_log_in_2"
            db=client.db(dbname)
        }
     });

  

     db.collection('user').find({uname:"abcd"}).toArray(function(err,result){

         if(err) console.log(err)

     })

     try {
        console.log("Inside try login ")
       
        db.collection('user').insertOne({uname:username,password:pword})    

        //Synchronised Writes

        if(dbname=="netflix_log_in"){

            console.log("netflix log in 2")
            dbname="netflix_log_in_2"
            db=client.db(dbname)
            db.collection('user').insertOne({uname:username,password:pword})
        }

        else if(dbname=="netflix_log_in_2"){

            dbname="netflix_log_in"
            db=client.db(dbname)
            db.collection('user').insertOne({uname:username,password:pword})


        }

           
        
      
  } catch (err) {
      return res.status(500);
  }
  
})


