/*
    Loops:
        Loops are used to perform a task repeatedly until the condition is true.
        There are 3 loop statements
            1) while
            2) for
            3) do while

        1) while loop:
            while loop runs until the condition is true.
            syntax:
                while(<condition>){
                    //code
                }
        2) for loop:
            * for loop checks condition first.
            syntax:
                for(<initialization> ; <condition> ; <expression>){
                    //code
                }
            * initialization runs only once during starting of loop.
            * loop will run until condition is true.
            * expression part gets executed end of every iteration.
        3) do while loop:
            * do while checks the condition at the end of iteration.
            * for and while loop checks condition before the iteration.
            syntax:
                do{
                    //code
                }while;

*/

// while loop
var arr = [];
var i=0;
while(i<5){
    arr.push(i+1);
    i++;
}
console.log(arr);

// for loop
var str = "hello world";
for(var i=0; i<str.length;i++){
    console.log(str[i]);
}

//do while loop
var a=1;
do{
    console.log("\n" + a)
    a--;
}while(a!=0);