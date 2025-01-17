const fs = require('fs');

// Require the filename
const readFile = (req,res)=>{
    if(fs.existsSync(req.filename)){
        fs.readFile(req.filename,'utf8',(err,data)=>{
            if(err){
                console.log(err.message);
                res.status(404).send(`Error : ${err.message}`);
            } if(res) {
                res.status(200).send(JSON.stringify({success:true,filecontents:data}));
            }
        });
    } else {
        res.status(404).send("Sorry the file that you are tring to update does not exist.When this happens means it may have been deleted or moved to another destination");
    }
}
const delFile = (req,res)=>{
    if(fs.existsSync(req.filename)){
        fs.unlink(req.filename,(err)=>{
            if(err){
                res.status(409).send(`Error Deleting File: ${err.message}`);
            } else {
                res.status(200).send("File is succesfully deleted!");
            }
        });
    } else {
        res.status(404).send("Error Deleting File.Seems like file do not exist");
    }
}
const updateFile = (req,res)=>{
    fs.exists(req.filename,(e)=>{
        if(e){
            fs.appendFile(req.filename,req.appendData,(err)=>{
                if(err){
                    res.status(409).send(`Error Updating File: ${err.message}`);
                } else {
                    res.status(200).send("File successfully updated!");
                }
            });
        } else {
            res.status(404).send("Sorry the file that you are tring to update does not exist.When this happens means it may have been deleted or moved to another destination");
        }
    })

}
const createNew = (req,res)=>{
    if(fs.existsSync(req.filename)){
        res.status(422).send("Sorry the file that you are trying to create already exists");
    } else {
        fs.writeFile(req.filename,'','utf-8',(err)=>{
            if (err){
                req.status().send(`Error creating File: ${err.message}`)
            } else {

            }
        })
    }
}
const fetchFiles = (req,res)=>{
    fs.readdir(req.dir,'utf8',(err,files)=>{
        if(err){
            
        }
    })
}
module.exports = { readFile,delFile,updateFile,createNew,fetchFiles }