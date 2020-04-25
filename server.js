const express=require('express');
const mongoose=require('mongoose');
const app=express();

mongoose.connect('mongodb://127.0.0.1:27017/user-manager', {useNewUrlParser: true})
.then(()=> console.log('Connected to database'))
.catch(err =>console.error(err));


app.use(express.urlencoded({extended:true}));
app.use(express.json());


const UserControl = require('./controllers/UserContol');

app.post('/api/user/create',UserControl.create );
app.post('/api/user/update',UserControl.update );





app.listen(3000,()=> console.log('srver started on port 3000'))