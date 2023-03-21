

//Step 3
//Copy over your step2.js code to step3.js.

//Add a feature where, on the command line, you can optionally provide an
 //argument to output to a file instead of printing to the console.
// The argument should look like this: --out output-filename.txt readfile-or-url.

//Current features should still work the same:




const fs=require('fs');
const process=require('process');
const axios=require('axios');


function handleOut(text,out){
    if(out){
        fs.writeFile(out,text,'utf8',function(err){
            if(err){
                console.error(`Could not write ${out}: ${err}`);
                process.exit(1);
            }
        });
    }else{
        console.log(text);
    }
}




function cat(path,out){
  fs.readFile('path','utf8',function(err,data){
    if (err){
        console.error(err);
        process.exit(1);
    }else{
        handleOut(data,out);
    }
   
  });
}


async function webCat(url,out){
    try{
        let resp=await axios.get(url);
        handleOut(resp.data,out);
    }catch(err){
        console.error(`Error fetching ${url}: ${err}`);
        process.exit(1);
    }
}

let path;
let out;

if(process.argv[2]==='--out'){
    out=process.argv[3];
    path=proces.argv[4];
}else{
    path=process.argv[2];
}



let path=process.argv[2];

if(path.includes("http")){
    webCat(path);
}else{
    cat(path);
}