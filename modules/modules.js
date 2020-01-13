//module exports
const C=require('./test1');
const calc1=new C(5,8);
console.log(calc1.add());

//Exports

// const cal2=require('./test2');
const {add,multiply,divide}=require('./test2');
console.log(multiply(3,3));

//caching

require('./test3')();
require('./test3')();
require('./test3')();