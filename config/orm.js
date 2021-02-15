const connection = require("../config/connection.js");

const orm = {
    selectAll: function(tableName){
        connection.query('SELECT * FROM ??', tableName, function(err, data){
            if (err) throw err
            console.log(data)
        })
    },
    // insertOne: function(){

    // },
    // updateOne: function(){

    // }
}

module.exports = orm;
