/*
    Objects:
        javascript objects are similar to the dictionaries of python.
        Object can hold any other data type

        syntax:
            var <object name> = {key1:value1, key2:value2, key3:value3,.....}
        * we can access a object element in two ways
            1) bracket method (<object name>["key"])
            2) dot method (<object name>.key)
        ex:
         var student = {"name":"sai", "height":"5'10''", "weight":72};
         console.log(student["name"]); //bracket method
         console.log(student.name);    //dot method
*/

// object creation
var student = {"name":"sai", "height":"5'10''", "weight":72};
console.log(student["name"]); //bracket method
console.log(student.name);    //dot method

// changing object element
student.name = "pavan"; // dot method
console.log(student);
student["name"] = "kumar"; // bracket method
console.log(student);

// adding new element in the object
student.id = "1";     // dot method
console.log(student);
student["rank"] = "2";  // bracket method
console.log(student);  

// deleting a property/element from a object
delete student.height; // deletes height property from student object
console.log(student);

// key values as integers
var obj1 = {1:"hi", 2:"hello", 3:"world"};
console.log(obj1[1]);
