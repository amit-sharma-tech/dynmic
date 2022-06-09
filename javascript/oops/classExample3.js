//https://dev.to/nehal_mahida/oops-in-javascript-with-easy-to-understand-examples-2ppn


class User {
    name;
    email;
    #password;

    constructor(){}

    #validateEmail(email){
        return true;
    }

    #validatePassword(password){
        return true;
    }


    signup(name, email, password){
        let isValidated = false;
        isValidated = this.#validateEmail(email);
        isValidated &&= this.#validatePassword(password);

        if(isValidated){
            this.name = name;
            this.email = email;
            this.#password = password;
            console.log('User registered Successfully');
        }
        else{
            console.log('Please enter correct details');
        }
    }


    login(email,password){
        if(this.email === email && this.password === password){
            console.log("User login Successfully");
        }
        else{
            console.log("Authentication failed!");
        }
    }
}
