let arr:number[];   
arr = [1, 2, 3, 4]   
console.log("Array[0]: " +arr[0]); //1
console.log("Array[1]: " +arr[1]); //2

//Two Dimensional array
var mArray:number[][] = [[1,2,3],[5,6,7]] ;  
console.log(mArray[0][0]);  
console.log(mArray[0][1]);  
console.log(mArray[0][2]);  
console.log();  
console.log(mArray[1][0]);  
console.log(mArray[1][1]);  
console.log(mArray[1][2]);  

//array by using the Array object.  
let arr:string[] = new Array("jsp","2200","ts","Angular");  
for(var i = 0;i<arr.length;i++) {   
   console.log(arr[i]);  
                                
 let arr:string[] = new Array("Jsp", "2300", "ts", "Angular");   
//Passing arrays in function  
function display(arr_values:string[]) {  
   for(let i = 0;i<arr_values.length;i++) {   
      console.log(arr[i]);  
   }    
}  
//Calling arrays in function  
display(arr);  
