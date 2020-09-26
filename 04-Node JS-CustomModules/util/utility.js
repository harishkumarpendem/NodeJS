//this is to declare a function
let greet = (name) => {
    console.log(`hello ${name}`);
};

//reverse string
let convertString = (str) => {
    let temp = '';
    for(let i = str.length-1; i>=0; i++){
        temp += str.charAt(i);
    }
    return temp;
};

//this is to export the function
module.exports = {
    greet,
    convertString
};