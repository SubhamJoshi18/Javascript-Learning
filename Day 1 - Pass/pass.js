/*
  pass by value  = primitive data type (number,boolean,string,symbol,null,undefined)
  pass by reference = non primitive data type array object
  */

let a = 5;

let b = a;
//this is pass by value
/*

when a variable is assigned to another variable, the value stored in the variable is copied into the new variable.
 They are independent of each other, each occupying its own memory space.

/*
memory
a = 5    then when  b=a ,b will not create seprate
b= a         space in memory like a but will go to the memory
        space of a
            now will both a and b will work independently



*/
let b1 = a + 5;
console.log(a);
console.log(b);
console.log(b1);

//Pass By reference

let obj1 = {
  name: "Suham",
  age: 18,
  hasCode: true,
};

//const obj2 = obj1;
//now lets try to change the value of obj1 through obj2
//obj2.name = "Rahul";
//but the change will reflect  also to  the obj1
//let obj2 = Object.assign({ name: "Rahul" });
//Bundling the properties of the object using rest operator
let obj2 = { ...obj1 };
obj2.name = "Rahul";
console.log(obj1);
console.log(obj2);

//aba nested ko lagi

let object = {
  name: "Subham",
  id: 20,
  age: 18,
  city: {
    address: "Imadol",
    country: "Nepal",
  },
};

let object2 = JSON.parse(JSON.stringify(object));
object2.city.address = "Lokhanthali";
console.log(object);
console.log(object2);

//now for array

const array = [1, 2, 3, 4, 5, 6, 7];
//let array2 = array;
/*console.log(array2);
let array23 = new Array();
array23.push(array);
array23.flat(1);*/

let array23 = [...array];
array23.push(8);
array.push(10);
console.log(array);
console.log(array23);

/*in array the original array
and the array which is copied to another tempory array 
allocated or place a direction to the 
same memory location of the first orginal array

 original array =[]-------------------------------------------------->
                                                                ----------->[First orginal array value]
 tempory array which is declared by array23 = array---------------------> 

 if we want to change the value of the second array without reflecing the changes in the original array
 we can use rest operator to copied the content of the original array or some kind of clone
 so no changes can be affect on the original array



*/
