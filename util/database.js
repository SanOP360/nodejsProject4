const mysql=require('mysql2');


const pool = mysql.createPool({
    host:'localHost',
    user:'root',
    database:'node-schema',
    password:'Sanjay@123'

});

module.exports=pool.promise();