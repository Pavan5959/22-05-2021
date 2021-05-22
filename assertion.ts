let empCode: any = 111;   
let employeeCode = <number> code;   
console.log(typeof(employeeCode)); //Output: number 
  
  //using <> brackets
  let empCode: any = 111;   
let employeeCode = <number> code; 
  
  //using keyword
  let empCode: any = 111;   
let employeeCode = code as number;  
  
  //with object
  interface Student {   
    name: string;   
    code: number;   
}  
let student = <Student> { };   
student.name = "Rohit"; // Correct  
student.code = 123; // Correct 
