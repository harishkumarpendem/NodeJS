const fs = require('fs');

//Synchronous way
/*
let fileContent = fs.readFileSync('./msg.txt', 'utf-8');
console.log(fileContent);

let newFileContent =  `hello! this is new file content : ${fileContent}`;
fs.writeFileSync('data.txt',newFileContent,'utf-8');
console.log('data is written to a file'); */

//Asynchronous way
/*
fs.readFile('./msg.txt', 'utf-8', (err,data) => {
    if(err) throw err;
    console.log(data);
    fs.writeFile('hello.txt',data,'utf-8',(err) =>{
        if(err) throw err;
        console.log('data is written to the file');
    })
});

console.log('this is fs core module example');*/

// JOSN files

let employees = [{ "id": 1, "first_name": "Phillida", "last_name": "Uden", "email": "puden0@weibo.com", "gender": "Female", "ip_address": "3.202.201.201" },
{ "id": 2, "first_name": "Carlen", "last_name": "Todeo", "email": "ctodeo1@npr.org", "gender": "Female", "ip_address": "17.104.158.102" },
{ "id": 3, "first_name": "Donalt", "last_name": "McVeigh", "email": "dmcveigh2@nasa.gov", "gender": "Male", "ip_address": "77.187.184.244" },
{ "id": 4, "first_name": "Braden", "last_name": "Offener", "email": "boffener3@nasa.gov", "gender": "Male", "ip_address": "179.96.71.49" },
{ "id": 5, "first_name": "Stan", "last_name": "McCrackan", "email": "smccrackan4@github.com", "gender": "Male", "ip_address": "219.10.149.14" },
{ "id": 6, "first_name": "Brandea", "last_name": "Pifford", "email": "bpifford5@mozilla.com", "gender": "Female", "ip_address": "64.10.161.122" },
{ "id": 7, "first_name": "Hobard", "last_name": "Owen", "email": "howen6@webmd.com", "gender": "Male", "ip_address": "132.177.28.153" },
{ "id": 8, "first_name": "Dmitri", "last_name": "O'Meara", "email": "domeara7@cmu.edu", "gender": "Male", "ip_address": "133.238.194.179" },
{ "id": 9, "first_name": "Craggie", "last_name": "Rickford", "email": "crickford8@cbslocal.com", "gender": "Male", "ip_address": "82.25.233.228" },
{ "id": 10, "first_name": "Aleda", "last_name": "Jaine", "email": "ajaine9@theglobeandmail.com", "gender": "Female", "ip_address": "160.91.7.39" }]

fs.writeFile('emplyees.json', JSON.stringify(employees) , 'utf-8', (err) => {
    if(err) throw err;
    console.log('data is written to the file');
});

// read the JSON file

fs.readFile('emplyees.json', 'utf-8', (err,data) => {
    if(err) throw err;
    let emplyees = JSON.parse(data);
    console.log(emplyees);
});