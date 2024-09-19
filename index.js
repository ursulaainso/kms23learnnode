import path from 'path';
import fs from 'fs'; //ES import 

fs.writeFileSync('log.txt', 'hello files');
let name = path.basename('C:\\temp\\myfile.html');
console.log(name);