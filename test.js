//import * as helpers from "./index.js"
import { arrayHelper} from "./index.js";

const helper = new arrayHelper();


//console.log(helper.sortValue([0,5,1,17,200,2])) 
// console.log(sortAlphabet(['a','c','b','A','1']))

//console.log(helper.removeNullUndefined(['a', undefined, undefined,'b','A','1','1','1',null,'c',0,0,'c']))

const array = helper.createArray(10)
console.log(helper.shuffle(array))
console.log(helper.checkFrequency(['a','c','b','A','1','1','1','a','c','c','c','c','c','A','c']))
console.log(helper.lowerCaseAll(['Cdjwui','Hej','WOw','abceeeee','dedede']))


const array1 = ['hi','cool','a','b','1']
const array2 = ['a','c','b','A','1']

// console.log(helper.merge(array1, array2))