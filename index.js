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

function reverse(arr){
	const reversed = []
	for (let i = arr.length - 1; i >= 0; i--) {
		reversed.push(arr[i])
	}
	return reversed
}

// Clean up Functions
function getUnique(arr){
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
 * Remove specific elements from the array sent in.
 * 
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

function median (arr) {
  const sortedArray = sortValue([...arr])
  let med
  if (sortedArray.length % 2 !== 0) {
    med = sortedArray[(sortedArray.length - 1) / 2]
  } else {
    med = (sortedArray[sortedArray.length / 2 - 1] + sortedArray[sortedArray.length / 2]) / 2
  }
  return med
}

// String functions
function upperCaseAll(arr){
	const upperCaseArr = [...arr]
	for (let i = 0; i < upperCaseArr.length; i++) {
		upperCaseArr[i] = upperCaseArr[i].toUpperCase()
	}
	return upperCaseArr
}

function lowerCaseAll(arr){
	const lowerCaseArr = [...arr]
	for (let i = 0; i < lowerCaseArr.length; i++) {
		lowerCaseArr[i] = lowerCaseArr[i].toLowerCase()
	}
	return lowerCaseArr
}

// Search Functions

/**
 * Checks how many times each unique element shows up in a array
 * 
 * @returns {object} - Object showcasing how many times the elements appear.
 */
function checkFrequency(arr){
	const frequencyList = {}
	const uniqueList = getUnique(arr)
	for (let i = 0; i < uniqueList.length; i++) {
		frequencyList[uniqueList[i]] = 0
	}
	for (let i = 0; i < arr.length; i++) {
		if(uniqueList.includes(arr[i])){
			frequencyList[arr[i]]++
		}
	}
	return frequencyList
}

function getRandom(arr){
	const random = Math.floor(Math.random() * (arr.length))
	return [...arr][random]
}

function getRandomMany(arr, amount){
	const shuffledArray = shuffle([...arr])
	console.log(shuffledArray)
	return shuffledArray.slice(0, amount)
}

//

/**
 * Merges two arrays without including duplicates.
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
function merge(arr1, arr2) {
	let newArray = [arr1, arr2]
	newArray = getUnique(newArray.flat())
	return newArray
}

// ---- Export ----
export {
	createArray,
  sortAlphabet,
  sortValue,
  sortCharLength,
	shuffle,
	reverse,
	getUnique,
	removeFalsy,
	removeNullUndefined,
	sum,
	min,
	max,
	average,
	median,
	upperCaseAll,
	lowerCaseAll,
	checkFrequency,
	getRandom,
	getRandomMany,
	merge
}