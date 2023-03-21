
//write function cat. it should take one argument, path, and it should read the file with that path, 
//and print the contents of that file. 
//then write some code that calls that function, allowing you to specify the path argument via the commandline


const fs=require('fs');
const process=require('process');

function cat(path){
  fs.readFile('path','utf8',function(err,data){
    if (err){
        console.error(err);
        process.exit(1);
    }
    console.log(`file contents:${data}`);
  });
}
cat(process.argv[2]);

