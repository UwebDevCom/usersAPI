const express = require('express');
const http = require('http');

const app = express();
const fs = require('fs');
app.get('/',(req,res)=>{
res.send('<h1>Welcome to my site</h1>');
});
app.get('/users',(req,res)=>{
    const users = require('./users.json');
    res.send(users);
});
app.post('/users',(req,res)=>{
    const users = require('./users.json');
    const {name , lastName} = req.query;
    //users = JSON.parse(users);
    if (users.filter(obj=>obj.name== name && obj.lastName==lastName).length < 1 ){
    users.unshift({name,lastName});
    fs.writeFileSync(
        './users.json',
        JSON.stringify(users),
        {encoding:'utf-8'}
    );
}
    res.send(users);

});
app.delete('/users',(req,res)=>{
    const users = require('./users.json');
    const {name , lastName} = req.query;
    let newUsers =[];
   for (let i =0 ; i<users.length; i++) {
    if (users[i].name!= name){
        newUsers.push(users[i]);
    }
   }
    fs.writeFileSync(
        './users.json',
        JSON.stringify(newUsers),
        {encoding:'utf-8'}
    );
    res.send(newUsers);
});
app.listen(8080);