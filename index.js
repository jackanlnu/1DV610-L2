// Creation Functions
function createArray(arrayLength){
	const arr = []
	for (let i = 1; i <= arrayLength; i++) {
		arr.push(i)
	}
	return arr
}

// Sorting Functions
function sortAlphabet(arr){
  return [...arr].sort()
}

function sortValue(arr){
  return [...arr].sort((a, b) => a - b)
}

function sortCharLength(arr){
  return [...arr].sort((a, b) => a.length - b.length)
}

function shuffle(arr){
	const orderedArray = [...arr]
	const shuffledArray = []
	while (orderedArray.length > 0){
		const random = Math.floor(Math.random() * (orderedArray.length))
		shuffledArray.push(orderedArray.splice(random, 1)[0])
	}
	return shuffledArray
}

// Clean up Functions
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

function removeFalsy(arr){
	const falsyList = [null, undefined, 0, false, ""]
	return removeElements(arr, falsyList)
}

function removeNullUndefined(arr){
	const falsyList = [null, undefined]
	return removeElements(arr, falsyList)
}

/**
 * @param {Array} arr 
 * @param {Array} conditions - List of elements that should be removed from the array.
 */
function removeElements(arr, conditions){
	const cleanArr = [...arr]
	for(let i = 0; i < cleanArr.length; i++){
		if(conditions.includes(cleanArr[i])) {
			cleanArr.splice(i, 1)
			i--
		}
	}
	return cleanArr
}

// Math functions
function sum(arr) {
	let arrSum = 0
	for (let i = 0; i < arr.length; i++) {
		arrSum += arr[i]
	}
	return arrSum
}

function min(arr) {
	let arrayMin = arr[0]
	for (let i = 1; i < arr.length; i++) {
		if(arr[i] < arrayMin) {
			arrayMin = arr[i]
		}
	}
	return arrayMin
}

function max(arr) {
	let arrayMax = arr[0]
	for (let i = 1; i < arr.length; i++) {
		if(arr[i] > arrayMax) {
			arrayMax = arr[i]
		}
	}
	return arrayMax
}

function average(arr) {
	let arrSum = 0
	for (let i = 0; i < arr.length; i++) {
		arrSum += arr[i]
	}
	return arrSum/arr.length
}


// ---- Export ----
export {
	createArray,
  sortAlphabet,
  sortValue,
  sortCharLength,
	shuffle,
	removeDuplicates,
	removeFalsy,
	removeNullUndefined,
	sum,
	min,
	max,
	average
}