const path=require('path');
const fs=require('fs');

let inputArr=process.argv.slice(2);
console.log(inputArr);

let fileName=inputArr[0];
let content=inputArr[1];

console.log('fileName',fileName);
console.log('content',content);

let currentPath=process.cwd();
console.log(currentPath);

let joinedPath=path.join(currentPath,'abc','def.txt');
console.log(joinedPath);


let file1=fileName.split('/');
file1.pop();
console.log(file1.join("/"));

let file2=path.basename('C:/Users/Dell/Desktop/JavaScript/fileOrganizer/pathModule/path.js');
console.log(file2);

let file3=path.basename('C:/Users/Dell/Desktop/JavaScript/fileOrganizer/pathModule/path.js','.js');
console.log(file3);

let extName=path.extname('C:/Users/Dell/Desktop/JavaScript/fileOrganizer/pathModule/path.js');
console.log(extName);

