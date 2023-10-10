const accountId = 12345
let accountEmail = "indrajeet@gmail.com"
var accountPassword = "123456"
accountCity = "vadodara"
let accountState

// accountId = 2   // const can not be change once it initialize 

// console.log(accountId);

accountEmail = "s@gmail.com"
accountPassword = "Indrajeet"
accountCity = "patna"

/*
    Note : - prefers not to use Var 
            becouse of issue in block scope and functional scope 
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])  
// console.table is use in javascrpt to display multiple value in table form 

/*
    Note : - when we declare var and let and did not assign any value then
    by default it's value is "undefined"
*/