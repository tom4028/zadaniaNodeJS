const request  = require('request');
const fs = require('fs');
const yargs = require('yargs').argv;

const APPID = '5c93c428e6adf538aadd8d533068be7b';

let options = {
    url:`https://api.openweathermap.org/data/2.5/weather?q=${yargs.city},pl&APPID=${APPID}`
};

if(!yargs.city){
    console.log('Wpisz Nazwe miasta --city miasto');
}else{
    request.get(options,function(err,response,body){
        if(!err){
            console.log(response.statusCode);
            console.log(body);
            fs.writeFile('pogoda.json',body,(err)=>{
                if(!err){
                    console.log('Zapisano do pliku.');
                } 
            });
        }else{
            console.log('jakiś błąd: '+err);
        }
        fs.readFile('pogoda.json',(err,data)=>{
            if(!err){
                console.log(data.toString());
            }
        })
    });
}
