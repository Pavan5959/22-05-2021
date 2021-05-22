var age: number = 44;          // number variable  
var name: string = "Rahul";     // string variable  
var isJust: boolean = true; // Boolean variable  

//using function
function display(id:number, name:string)  
{  
    console.log("Id = " + id + ", Name = " + name);  
}  
display(101, "Rohit Sharma");  

//Inline type
var student : {   
    id: number;   
    name: string;   
};   
  
student = {   
  id: 100,   
  name : "John"  
}  
