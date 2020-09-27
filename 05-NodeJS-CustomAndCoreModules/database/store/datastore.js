const fs = require('fs');
const path = require ('path');

let getAllEmployees = (callback) => {
    fs.readFile(path.join(__dirname,'employees.json',), 'utf-8',(err,data) => {
        if(err) throw err;
        let employees = JSON.parse(data);
        callback(employees);
    });
}

module.exports = {
    getAllEmployees
}