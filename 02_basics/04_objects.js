//singleton 

const tinderUser = new Object()


tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLockedIn = false;

//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Dev",
            middlename : "kumar",
            lastname : "Sharma"
        }

    }
}

console.log(regularUser.fullname.userfullname.firstname);



