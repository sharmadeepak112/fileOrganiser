const fs=require('fs');
const path=require('path');

let inputArr=process.argv.slice(2);
let inputDir=inputArr[0];

let allEntities=fs.readdirSync(inputDir);

let content="";
for(let i in allEntities){
    let entityName=allEntities[i];
    let eName=path.join(inputDir,entityName)
    let stats=fs.lstatSync(eName);
    console.log(stats);
    let isFile=stats.isFile();
    if(isFile){
        let extName=path.extname(entityName);
        console.log(extName);
        if(extName=='.txt'){
            content+=fs.readFileSync(eName);
            console.log(content);
        }

    }
}

//let summaryFile=path.join(process.cwd(),"summary.txt");
let summaryFile="C:/Users/Dell/Desktop/JavaScript/fileOrganizer/summary.txt";
fs.writeFileSync(summaryFile,content); 
