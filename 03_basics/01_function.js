function saymyname(){
    console.log("l");
console.log("u");
console.log("c");
console.log("k");
}

// saymyname()


function addtwono(number1, number2){
    console.log(number1+ number2);
    
}
addtwono(3,4) //7
addtwono(3,"4") //34
addtwono(3,"a") //3a
// he4re number1 and 2 are parameter 
// and 3 and 4 are argument
// agar koi value passs nhi karenge to null nahi auega undefined ayega
function calculatecartprice(...num1){
    return num1
}

console.lolg(calculatecartprice(200,400,500))  