const bcrypt = require('bcryptjs');

let user = {
    name : 'harish',
    email : 'harish@gmail.com',
    password : 'neverever'
};

let salt = bcrypt.genSaltSync(10);
let hashedPassword = bcrypt.hashSync(user.password, salt);

let updatedUser = {
    ...user,
    password : hashedPassword
};

//compare both passwords

if(bcrypt.compareSync('neverever', hashedPassword)){
    console.log('password is matched');
}
else{
    console.log('password not matched');
}