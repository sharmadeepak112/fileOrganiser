const fs=require('fs');
const path=require('path');

let inputArr=process.argv.slice(2);
let mainDir=inputArr[0];
let subDir=inputArr.slice(1);

// console.log(mainDir);
// console.log(subDir);

let mainDirPath=path.join(process.cwd(),mainDir);
if(!fs.existsSync(mainDirPath)){
    fs.mkdirSync(mainDirPath);
}

for (let i in subDir){
    // console.log(subDir[i]);

    let folder=path.join(mainDirPath,subDir[i]);
    console.log('folder path',folder);
    if(!fs.existsSync(folder)){
        fs.mkdirSync(folder);
    }
    for(let j=1;j<=3;j++){
        let module=path.join(folder,`Module${j}`);   //when we use vaiable
        console.log('module names',module);
        fs.mkdirSync(module);
        let fileName=path.join(module,'content.md');
        fs.writeFileSync(fileName,'#Hello Everyone');
    }
    
}