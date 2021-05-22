function sum(x: number, y: number )  
{  
    return x + y;      
}  
let Addition: number = sum(10,20); // Correct  
let str: string = sum(10,20); // Compiler Error  

//Here the type has to be equal then it gets output. when the type is different we get compile time error
