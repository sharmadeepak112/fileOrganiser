let fs=require('fs');
let path=require("path");

// "├──" "└──"
function treeFn(srcPath){
   treeFunction(srcPath,"");
    
}

function treeFunction(srcPath,space){
    let baseName=path.basename(srcPath);
    let content=fs.readdirSync(srcPath);
     console.log(`${space}${baseName}\n${space}└──`);
    

    for(let i=0;i<content.length;i++){
        let contentPath=path.join(srcPath,content[i]);
        if(fs.lstatSync(contentPath).isFile()){
            console.log(`${space}\t├──${content[i]}`);
            
            
        }else{
           treeFunction(contentPath,space+"\t");
        }
       
    }
    
}


module.exports={
    treeFn:treeFn
}