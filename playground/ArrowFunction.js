/*var square = (x) =>{
  var result = x * x;//can be one line
  return result;//instead of 2
};*/
var square = x => x * x;//if I have ONLY ONE argument I had leaave the () out

console.log(square(9));

var user = {
  name: 'Joel',
  sayHi: () => {//arrow functions DO NOT BIND (When using "this" keyword)
  console.log(arguments);//will output global arguments
      console.log(`Hi I am ${this.name}`);//output: undefined
  },
  sayHiAlt () {               //This is another way of a function in ES6
    console.log(arguments);//will output 0,1,2,3 (Linked List)
    console.log(`Hi I am ${this.name}`);//but it lets you bind; Output: Hi I am Joel
  }
};

//user.sayHi();
user.sayHiAlt();
user.sayHiAlt(1,2,3);
//user.sayHi(1,2,3);
