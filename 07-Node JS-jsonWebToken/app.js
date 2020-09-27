const jwt = require('jsonwebtoken');

let user = {
    id : 'abc-123-ghj',
    name : 'king',
    email : 'king@gmail.com'
}

let payload = {
    id : user.id,
    name : user.name
};
let secretkey = 'ssshhhh';

//generate new token
let token = jwt.sign(payload, secretkey, {expiresIn : 3600});
console.log(token);

//verify token
jwt.verify(token, secretkey, (err,decoded) => {
    if(err) throw err;
    console.log(decoded);
});