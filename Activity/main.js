let helpObj=require('./command/help');
let orgObj=require('./command/organize');
let treeObj=require('./command/tree');
let inputArr=process.argv.slice(2);
let command=inputArr[0];
let path=inputArr[1];

switch(command){
    case "help":
        helpObj.helpFn();
        break;
    case "organize":
        orgObj.organizeFn(path);
        break;
    case "tree":
        treeObj.treeFn(path);
        break;
    default:
        console.log(`unknown option: ${command}\nuse option: help`);
        break;           

}