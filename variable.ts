
//variable declaration
function a() {  
    var x = 50;  
    return function b() {  
         var y = x+5;  
         return y;  
    }  
}  
var  b = a();  
b();       //returns '55'  

//scoping rules
function f()  
{  
    var X = 5; //Available globally inside f()  
    if(true)  
    {  
        var Y = 10; //Available globally inside f()   
        console.log(X); //Output 5  
        console.log(Y); //Output 10  
    }      
    console.log(X); //Output 5  
    console.log(Y); //Output 10  
}  
f();  
console.log(X); //Returns undefined because value cannot accesses from outside function  
console.log(Y); //Returns undefined because value cannot accesses from outside function 

//block scoping
function f(input: boolean) {  
    let x = 100;  
    if (input) {  
        // "x" exists here        
        let y = x + 1;  
        return y;  
    }  
    // Error: "y" doesn't exist here  
    return y;  
}  

//re-declaration
function f(a) {  
    var a;  
    var a;  
    if (true) {  
        var a;  
    }  
} 

//hoisting
function get(x){     
  console.log(a);  //printing x variable. Value is undefined       
  //declared variable after console hoisted to the top at run time    
  var a = x;        
  //again printing x variable. Value is 3.  
  console.log(a);    
}   
get(4)

//constant declaration
function constTest(){  
  const VAR = 10;  
  console.log("Value is: " +VAR);  
}  
constTest();  
