let fs=require('fs');

let path = require('path');

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    pictures: ['png','jpg','jpeg']
}

function organizeFn(srcPath){
    // console.log(srcPath);
    let srcBaseName=path.basename(srcPath);
    // console.log(srcBaseName);
    let destPath=srcPath.split('/');
    destPath.pop();
    let organizeFolderPath=path.join(destPath.join("/"),`${srcBaseName}_organizeFiles`);
    // console.log(organizeFolderPath);

    if(!fs.existsSync(organizeFolderPath)){
        fs.mkdirSync(organizeFolderPath);
    }

   findFile(srcPath,organizeFolderPath);
}

function findFile(srcPath,organizeFolderPath){
    let entities=fs.readdirSync(srcPath);
    // console.log(entities);

    for(let i in entities){
        
        let file=entities[i];
        // console.log(file);
        let filePath=path.join(srcPath,entities[i]);
       if(fs.lstatSync(filePath).isFile()){
          // console.log("lstat work");
          let type=checkType(file);
        //   console.log(type);
          let typeFolder=path.join(organizeFolderPath,type);
          if(!fs.existsSync(typeFolder)){
             fs.mkdirSync(typeFolder);
            }
          let src=path.join(srcPath,entities[i]);
          let dest=path.join(typeFolder,entities[i]);
          fs.copyFileSync(src,dest);

        }else{
            findFile(filePath,organizeFolderPath); 
        }
    }
}

function checkType(file){
    for(type in types){
        for(let ext of types[type]){
           if(path.extname(file).split('.')[1]==ext){
               return type;
           }
        }
    }
    return 'others';
}

module.exports={
    organizeFn:organizeFn
};