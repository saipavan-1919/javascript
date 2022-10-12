/*
    Strings:
        *Group of words inside a double or single quoataions is known as a string.
         ex: var string1 = "hi";
            var string2 = "hello";
        *We can use the indexing to access the elements in a string.
        *Strings are immutable i.e, they cannot be changed using indexing.
         ex: var string1 = "hello";
             string1[0] = 'H'; cannot be done like this
*/

//string declaration
var string1 = "hello";
console.log(string1);

//accessing string using index
console.log(string1[0]); //this will print first letter in string1

//conacatinating two strings
var string2 = "hello" + " world";
console.log(string2);

// conacatinating variables inside strings
var string3 = string2 + " how are you " + string1;
console.log(string3);

//length of string
var string4 = "hi hello";
var l = string4.length;
console.log("lenght = "+l);