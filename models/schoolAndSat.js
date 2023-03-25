let module1=require('./school');
let module2=require('./sat');
const fs = require('fs');

const arr1 = module1.schools;
const arr2=module2.sat;



    const mergedArray = arr1.map(obj1 => {
        const obj2 = arr2.find(obj2 => obj2.dbn === obj1.dbn);
        return { ...obj1, ...obj2 };
      });
      

      fs.writeFileSync('./data.json', JSON.stringify(mergedArray));
 console.log(mergedArray);