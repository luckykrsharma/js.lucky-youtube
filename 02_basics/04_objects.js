// const tinderuser = new Object() //same output as below one but this is singleton and the down one is non singleton
const tinder ={}
 tinderUser.id= "123abds"
tinderUser.name = "sammy"

// console.log(tinferUser);

const regularUser ={
    email:"some&quwo.com",
    fullname: {
        userfullname: { //object ke andar object ke andar ek object 

            firstname: "ludcky",
            lastname: "kumar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
const obj1 ={1: "a", 2:"b"}
const obj2 = {3:"a",4:"b"}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3={...obj1, ...obj2} //best way to combine  
console.log(obj3);
