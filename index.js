// Sorting Functions
function sortAlphabet(arr){
  return [...arr].sort()
}

function sortValue(arr){
  return [...arr].sort((a, b) => a - b)
}

//
function removeDuplicates(arr){
	const uniqueArr = [arr[0]]
	for (let i = 0; i < arr.length - 1; i++) {
		let newUnique = true
		for (let j = 0; j <= uniqueArr.length - 1; j++) {
			if (arr[i] === uniqueArr[j]) {
				newUnique = false
			}
		}
		if(newUnique){
			uniqueArr.push(arr[i])
		}
	}
	return uniqueArr
}

// console.log(sortValue([0,5,1,17,200,2])) 
// console.log(sortAlphabet(['a','c','b','A','1']))
//console.log(removeDuplicates(['a','c','b','A','1','1','1','a','c','c','c','c','c','A','c']))
console.log(removeDuplicates(['1','1','1','3','2','2','3','3','2','1','3']))

