const path = require('path');
const fs = require('fs');

//Read from database/employees/employees.json

fs.readFile(path.join(__dirname, 'database', 'employees', 'employees.json'), 'utf-8',(err,data) => {
    if(err) throw err;
    let customers = JSON.parse(data);
fs.writeFile(path.join(__dirname, 'util', 'customers.json'), JSON.stringify(customers), 'utf-8', (err) => {
    if(err) throw err;
    console.log('data is written to a file:');
  });
});

