const user =  {
    name : "Tejas Sharma",
    userName : "tejas_sharma",
    password : '123456',
    login  : function(userName,password){
        if(userName === this.userName && password === this.password){
            console.log('Login Successfull !');
        }else{
            console.log('Authentication Failed !');
        }
    }
};


console.log(user.login('tejas_sharma','123456'));