class User {
    #password;
    constructor(name, userName, password){
        this.name = name;
        this.userName = userName;
        this.#password = password;
    }

    login(userName, password){
        
        if(userName === this.userName && password === this.#password){
            console.log('Login Successfull');
        }
        else{
            console.log('Authentication failed!');
        }
    }

    setPassword(newPassword){
        this.#password = newPassword;
    }
};

const amit =  new User('Tejas Sharma','tejas_sharma','123456');
const js = new User('Javascript','js','python');
amit.setPassword('amit');


amit.login('tejas_sharma','123456');

console.log(amit.name);
console.log(amit.password);
// console.log(amit.#password);