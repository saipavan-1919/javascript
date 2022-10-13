/*
    Conditional statements:
        * conditional statements are used to make decisions.
        * there are 4 conditional statements
            1) if 
            2) if else
            3) if else ladder
            4) switch
        1) if statement:
           *if statement is used to make decision based on condition.
           *if the condition is true then the if statement will execute the code in it's block.
           syntax: 
                if(<condition>){
                    //code
                }
                There are two options for each condition to become
                1) true
                2) false
            * if the condition value is true then the code in if block will exectued
            * if the condition is false then it will not gets executed.
            * true, false are boolean values
        
        2) if else statement:
            * when condition is true then if block of code gets executed.
            * when condition is false then else block gets executed.
            syntax:
            if(<condition>){
                //code
            }
            else{
                //code
            }
        
        3) if else ladder:
            * if else ladder consist of n number of conditions.
            * which condition is true then that block of code gets executed.
            * if no condition is true then else condition gets executed.
            syntax:
            if(<condition1>){
                //code
            }
            else if(<condition2>){
                //code
            }
            .
            .
            .
            else{
                //code
            }

        4) switch statement:
            * switch statement consist of case labels.
            * case values should be either numbers or characters.
            * when case label satisfies the switch condidtion from that point all cases gets executed
            * break statement used to break the switch conditions
            syntax:
                switch(<condition>){
                    case label1:
                        //code
                    case label2:
                        //code
                    case label3:
                        //code
                    .
                    .
                    .
                    default:
                        //code
                } 
            * when label is matched with the condition value after that case all cases gets executed
            * to stop getting executed all case labels we need to use break statement.
            * 
*/

// if condition
if(true){   // this code will gets executed because the condition is true
    console.log("Yes, it is true.");
}
if(false)  // this code will not gets executed because condition is false
{
    console.log("it is false");  
}


// equality check operator
/*
    There are two equality check operators
    1) == (double equals)
    2) === (triple equals)
    * == this will convert the data types
    * === this will make strict data type checking
*/
if(3=='3') // this will be taken as true (== converts string to integer)
{
    console.log("Equal");
}
if(3==='3') // this will be treated as false (=== does not converts data types)
{
    console.log("equal");
}

// not equality operator
/* 
    there are two not equality operators
    1) !=  (not equality operator)
    2) !== (strict not equality operator)
*/
if(10!='10')  // it will become false becasue it performs type cast on string to number (true)
{
    console.log("not true");
}
if(10!=='10')  // it performs strict not equality+
{
    console.log("false");
}

// if else statement
var a=3;
if(a==2)
{
    console.log("equal to 2");
}
else
{
    console.log("not equal to 2");
}

// if else ladder statement
if(a<2)
{
    console.log("a less than 2");
}
else if(a==2)
{
    console.log("equal to 2");
}
else if(a>2)
{
    console.log("a greater than 2");
}

// switch statement
var a=2;
var b;
switch(a){
case 1:
    b="1";
    console.log(b);
case 2:
    b="2";
    console.log(b);
    break;
case 3:
    b="3";
    console.log(b);
default:
    b="5";
    console.log(b);
}