$(document).on('ready', function() {
  
});

// Question 1: Write a function called 'getName' which takes a single object argument and returns the value of the 'name' property of the given object.
function getName (nameObj) {
	return nameObj.name;
};

console.log(getName({name: 'Luisa', age: 25}));

// Question 2: Write a function called 'totalLetters' which takes an array of strings and returns the total number of letters in all strings.

function totalLetters (arrStrings) {

	var totalLength = 0;
	for (var i = 0; i < arrStrings.length; i++){
		totalLength = arrStrings[i].length + totalLength;
	};
	return totalLength;
};

console.log(totalLetters(['javascript', 'is', 'awesome']));
console.log(totalLetters(['what', 'happened', 'to', 'my', 'function']));

// Question 3: Write a function called 'keyValue' which takes two arguments and returns an object with a key of the first argument and the value of the second argument.

function keyValue (keys, values) {
	var myObj = new Object;
	myObj[keys] = values;
	return myObj;
};

console.log(keyValue('city', 'denver'));

// Question 4: Write a function called 'negativeIndex' which takes an array and a negative number, and returns the value from the array at the given negative index, as if the array was circular, i.e. arr.length+num.

function negativeIndex (strArray, negindex) {
	var i = strArray.length + negindex;
	return strArray[i];
};

console.log(negativeIndex(['a','b','c','d','e'], -2));
console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1));

// Question 5: Write a function called 'removeM' which takes a single string argument and removes all 'm' characters from the string. The function should return the new string.

function removeM (myString) {
	var myNewString = myString.replace(/m/g, '');
	return myNewString;
};

console.log(removeM('family'));
console.log(removeM('memory'));

// Question 6: Write a function called 'printObject' which takes a single object argument and console.log's each key-value pair in the format key is value on separate lines.

function printObject (thisObj) {

	var keys = Object.keys(thisObj);
	var values = [];
	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		values[i] = thisObj[key];
		console.log(keys[i] + ' is ' + values[i]);
	}
}

printObject({ a: 10, b: 20, c: 30 });
printObject({ firstName: 'pork', lastName: 'chops' });


// Question 7 : Write a function called 'vowels' which takes a string and returns an array of all the vowels in the string, including duplicates.

function vowels (myword) {
	var vowelreturn = [];
	for (var i = 0; i < myword.length; i++){
		if (myword.charAt(i).toLowerCase() === 'a' || myword.charAt(i).toLowerCase() === 'e' || myword.charAt(i).toLowerCase() === 'i' || myword.charAt(i).toLowerCase() === 'o' || myword.charAt(i).toLowerCase() === 'u'  ) {
				var letter = myword.charAt(i);
				vowelreturn.push(letter);
		}
	} 
	return vowelreturn;
}

console.log(vowels('alabama'));
console.log(vowels('What lets in youth?'));


// Question 8: Write a function called 'twins' which takes an array and returns true if every pair of items in the array is the same.
// 


function twins(myArray){
	if (myArray.length % 2 === 0) {
		for (var i = 0; i < myArray.length; i += 2){
			if (myArray[i] !== myArray[i+1]) {
				return false;
			};
		};
		return true;
	}
	else{
		return false;
	}

};

console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']));
console.log(twins(['a', 'a', 'b', 'z']));
console.log(twins(['a', 'a', 'b']));
console.log(twins(['a', 'a', 'b', undefined]));

// Question 9: Write a function called 'or' which takes an array of booleans and returns true if any one of them is true. Given an empty array, return false. If you find an item that is true, the function should return true immediately and not continue checking further values.

function or (booArray) {
	if (booArray !== null) {
		for (var i = 0; i < booArray.length; i++) {
			if (booArray[i] === true) {
				return true;
			}
		}
		return false;
	}
	else {
		return false;
	}
};

console.log(or([false, false, true, false]));
console.log(or([false, false, false]));
console.log(or([]));

// Question 10: Write a function called 'unique' which takes an array of strings, and returns a new array consisting of the unique values (no duplicates).

function unique (strArr){
	var temp = [];
	strArr.sort();
	for (var i = 0; i < strArr.length; i++){
		if (strArr[i] !== strArr[i+1]){
			temp[temp.length]=strArr[i];
		}
	}
	return temp;
}

console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']));
console.log(unique(['todd', 'avery', 'maria', 'avery']));

































