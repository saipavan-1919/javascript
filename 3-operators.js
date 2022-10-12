// no need to keep the semicolon at the end of a line
// It is better to use semicolon at the end of eery line of code

/*
    Operators:
        operators are used in the expressions to perform operations.
        ex: a=b+c; this is a expression
        * expression consist of two things
            1) operads  
            2) operators
        * In the above expression a,b,c are operands.
        * +,= are operators
        * Operators consist of two main qualities
            1) precedence    (which performs first)
            2) associtivity  (direction of performance)
*/

var a = 5;
var b = 6;

// addition 
var add = a+b;
console.log(add);

// substraction
var sub = a-b;
console.log(sub);

// multiplication
var mul = a*b;
console.log("multiplication =",mul);

//division
var div = a/b;
console.log("division = ",div);

//reminder
var rem = a%b;
console.log("reminder = ",rem);

//increment
var c = 6;
console.log(c++); //post increment
console.log(++c); // pre increment

//decrement
var d=7;
console.log(d--);//post decrement (returns presant value then decrements)
console.log(--d);//pre decrement (decrements first then returns value)

//assignment operators
var e=2;
e+=1;
console.log(e);
e-=1;
console.log(e);
e*=1;
console.log(e);
e/=1;
console.log(e);
e%=1;
console.log(e);
