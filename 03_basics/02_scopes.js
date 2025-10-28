var c = 3000 //global scope


if(true){
    let a =10
    const b = 20
    var c  =30

}//this curly braces is known as scope

function one(){
    const username = "lucky"
    function two (){
        const website = " youtube"
        console.log(username);
    }
   // console.log(website); // error ayega kyunki yeh two kw andar

    two()
}

one ()

//+++++++++++++++++++intresting++++++++++++++++++++

function addone(num){
    return num +1
}

addone(5)

const addtwo = function(num){
    return num +2
}

addtwo(5)
// both way we can declare the function

// ++++++++++++++++++ ARROW FUNCTION ++++++++++++++++++++++++
const user ={
    username : "lucky",
    price: 999,
    welcome:function(){
        console.log(`${this.usernsme} ,wecome to webbsite`); // this refer to the current context
        

    }

}
// arrow function representation 

const chai =()=>{
    let username = "lucky"
    console.log(this);
}

// chai()
// const addtwo = (num1, num2)=> {     --------1 type
//     return num1 + num2 
// }
// const addtwo =(num1, num2 ) => num1 +num2 ---------------2nd  type

const addtow = ( num1 , num2 )=> ({username :"lucky"}) // username: lucky as output

console.log(addtwo(3,4 ))