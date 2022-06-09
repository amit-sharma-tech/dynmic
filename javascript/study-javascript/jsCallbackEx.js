console.log("Start");

function loginUser(email,password,callback) {
    setTimeout(() => {
        console.log("Data start from here");
        // return {userEmail:email}
        callback({
            userEmail : email
        })
    }, 5000);
}

const user = loginUser('amit@gmail.com','123456',user =>{
    console.log(user);
});
console.log(user);

console.log("Finished");