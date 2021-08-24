let str="Hakunama tata";
// console.log(module);
let a=10;
function foo(msg){
    return "in owner.js"+msg
};
// module.exports=str;

console.log('content of owner.js print');
module.exports={
var:a,
fooFnc:foo,
string:str
};
