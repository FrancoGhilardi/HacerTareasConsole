import fs from 'fs';

const path = './db/dataText.json'

//#region SAVE DATABASE
export const saveDatabase = (data) => {


    fs.writeFileSync(path, JSON.stringify(data));
}
//#endregion

//#region READ DATABASE
export const readDatabase = () => {

    if (!fs.existsSync(path)) {return null;}

    return JSON.parse(fs.readFileSync(path,{ encoding: "utf8" }));
    
}
//#endregion