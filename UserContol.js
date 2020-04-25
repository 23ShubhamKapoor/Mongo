const UserModel= require('../models/UserModel');


module.exports={
create:(req,res) =>{
    let user=new UserModel({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    age: req.body.age,
    team: req.body.team
    });

    user.save()
    .then(result =>{
        res.json({success : true, result: result});

    })
    .catch(err =>{
        res.json({ success: false, result: err});
    });
},
update: (req,res)=>{
    UserModel.updateMany({_id:req.body._id},req.body)
        .then(user=>{
            if(!user)res.json({success: false, result:"User does not exist"});

            res.json(user);
        })
}

}