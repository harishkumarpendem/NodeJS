const store = require('./database/store/datastore.js');

//call function

store.getAllEmployees((employees) => {
    console.log(employees);
});