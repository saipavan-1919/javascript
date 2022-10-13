/*
    Functions:
        Functions are a block of code which are used to divide a big problem into small portions.
        Advantages of Functions:
            * Dividing problem into parts
            * Code reusability
            * Easy to understand
        
        * In javascript we can write a function as follows:
            syntax:
             function <function_name>(<arguments>) {
                // code
            }
        * There are two things about functions
            1) function definition
            2) function calling
        * We need to write the code for the required functionality (function definition)
        * When we want to use that function/code then we need to call that function.
        * we need to define the function before we call the function.
        * return:
            functions can return a value using keyword return.
        * Function takes arguments 
           we can send arguments while calling function.

*/

// example function
function my_func()
{
    console.log("Hi this is sai pavan\n");
}

my_func();

//scope of variables
var g = 5;   //global variable
function fun1()
{
    var a = 10;   // local varaible to function fun1
    console.log(g,a);
}
fun1();
console.log(g)

// returning value from function
function add(a,b)
{
    return a+b;
}
console.log("addition = "+add(3,4));