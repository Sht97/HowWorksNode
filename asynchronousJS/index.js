const fs=require('fs');
const superagent=require('superagent');


const readFilePro=file=>{
    return new Promise((resolve ,reject)=>{
        fs.readFile(file,(err,data)=>{
            if(err)reject('I could not find that file');
            resolve(data);
        })
    })
};

const writeFilePro=(file,data)=>{
    return new Promise(((resolve, reject) => {
        fs.writeFile(file,data,err=>{
            if(err) reject('We cant save the file');
            resolve('Save successful')
        })
    }))
}
readFilePro(`${__dirname}/dog.txt`).then(result=>{

    return superagent.get(`https://dog.ceo/api/breed/${result}/images/random`)}).then(res=>{
        console.log(res.body.message);
        return writeFilePro('dog-img.txt',res.body.message);
    }).catch(err=>{
        console.log(err.message);
    });
