/*
    Arrays:
        Arrays are datatypes which can hold different other data types.
        Arrays are declared using the square brackets.
        ex: var array1 = ["hi",1,2,3,2.5,'a']
        * we can use indexing on arrays to access the elements of a array.
        * Array can store any type of other datatypes like (strings, arrays, integer, boolean etc..)
        * Arrays are mutable i.e, we can change the elements of a array using indexing.
            ex:var arr1 = [1,2,4,5];
               arr1[2] = 3;   this is possible with arrays.
        * using push method we can add elements to the end of a array.
            ex:var arr = [1,2,3];
               arr.push(4); //after this the array becomes [1,2,3,4]
        * using pop method we can remove the items from the array
            ex:var arr = [1,2,3,4];
               arr.pop(); // removes the last item from the array and returns it
        * using shift method we can remove the first element of the array
            ex: var arr = [1,2,3,4];
                arr.shift(); //removes first element and returns it 
        * using unshift methodnwe can add element at the first place and returns lenght of new array
            ex: var arr = [2,3,4];
                var.unshift(1); //adds at first and returns length of new array

*/

// array declaration
var arr1 = [1,2,3,1.2,2.5,"hi"];
console.log(arr1);

// accessing using index
var arr2 = [1,2,3,4,"hi"];
console.log(arr2[1]);

// arrays are mutable 
// Modifying arrays using indexing
var arr3 = [1,2,4,4];
arr3[2] = 3;
console.log(arr3);

//nested arrays
var arr4 = [[1,2],[3,4]];
console.log(arr4[0][0]);  //refers to first array first element

// push method in array (appending in the array)
var arr5 = [1,2,3];
arr5.push(4);
console.log(arr5);

// pop method
var arr6 = [1,2,3,4];
var item = arr6.pop();  //removes last item and returns it
console.log("item = "+item+"\narr ="+arr6);

// shift method
var arr7 = [1,2,3,4];
item = arr7.shift();
console.log("item = "+item+"\narr = "+arr7);

// unshift method
arr7 = [2,3,4];
var l=arr7.unshift(1); // adds at first place and returns length of new array
console.log("lenght of new array = " + l + "\nnew arary = " + arr7);

