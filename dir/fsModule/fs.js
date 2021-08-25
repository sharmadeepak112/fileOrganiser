const fs=require("fs");
const path=require("path");
let content=fs.readFileSync('a.txt');
console.log(content+"");

// fs.writeFileSync("b.txt","tis is b file");

// fs.appendFileSync("b.txt","\nthis is b file");

// console.log(fs.readFileSync('b.txt',"utf-8"));

// fs.unlinkSync("b.txt");

//directories

//to make folder
// fs.mkdirSync("pathModule");

//to delete a folder
// fs.rmdirSync("pathModule");

//to check if a file exist
// console.log(fs.existsSync("ab.txt"));

// let statusObj=fs.lstatSync("a.txt");
// console.log(statusObj);

// console.log(statusObj.isFile());
// console.log(statusObj.isDirectory());



// let fileArr=fs.readdirSync('C:/Users/Dell/Desktop/JavaScript/fileOrganizer/dir');
// console.log(fileArr);

let srcPath='C:/Users/Dell/Desktop/JavaScript/fileOrganizer/fsModule/a.txt';
let destPath='C:/Users/Dell/Desktop/JavaScript/fileOrganizer/fsModule/b.txt';
let toBeCopiedFileName=path.basename(srcPath);
let dest=path.join('C:/Users/Dell/Desktop/JavaScript/fileOrganizer/dir',toBeCopiedFileName);
console.log(dest);
fs.copyFileSync(srcPath,destPath);
fs.copyFileSync(srcPath,dest);