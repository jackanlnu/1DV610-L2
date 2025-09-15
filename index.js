// Sorting Functions
function sortAlphabet(arr){
  return [...arr].sort()
}

function sortValue(arr){
  return [...arr].sort((a, b) => a - b)
}

// console.log(sortValue([0,5,1,17,200,2])) 
// console.log(sortAlphabet(['a','c','b','A','1'])) 
