const request = require('request');
const fs = require('fs');
const yargs= require('yargs').argv;

const options = {
    headers:{
        'User-Agent':'request'
    },
    url:`https://api.github.com/users/${yargs.nick}`
};

if(!yargs.nick){
    console.log('Program uruchomisz wpisując w konsole: node --nick=tom');
}else{

    request.get(options,function(err,response,body){
        if(err){
            return console.log(err);
        }else{
            console.log(response.statusCode);
            let bodyR = JSON.parse(body);
            console.log(bodyR.id);
            
            // fs.writeFile('body.txt', body,(err)=>{
            //     if(err){
            //         console.log(err);
            //     }else{
            //         console.log(body);
            //     }
            // });
        }
    });
}