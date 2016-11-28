// Use onclick because this is a simple website and pre IE9 compatability
var checkBtn = document.getElementById("check");
checkBtn.onclick = checkAnagram;

// Grabs values from text boxes and checks if anagrams
// For the sake of this problem, we will ignore spaces so Google Search's 
// "anagram" and "nag a ram" joke will work.
function checkAnagram(){
	var wordA = document.getElementById("wordA").value;
	var wordB = document.getElementById("wordB").value;

	// Remove white space
	wordA = wordA.replace(/\s+/g, '');
	wordB = wordB.replace(/\s+/g, '');

	// If still of different length, don't bother checking
	if (wordA.length !== wordB.length){
		document.getElementById("answer").innerHTML = "The string lengths don't match :/";
		return;
	}

	// If they're both 0 in length, call em clever
	if (wordA.length === 0 && wordB.length === 0){
		document.getElementById("answer").innerHTML = "Clever, aren't we? Technically, \
		empty strings are anagrams";
		return;
	}

	// Loop through wordA and store a count of its letters
	charsADict = createCharsDict(wordA);
	charsBDict = createCharsDict(wordB);

	if (charDictsEqual(charsADict, charsBDict)) {
		document.getElementById("answer").innerHTML = "Congrats! These are anagrams! :)";
	} else {
		document.getElementById("answer").innerHTML = "Nope, they're not anagrams! :(";
	}

}

// Creates a dictionary of character counts
function createCharsDict(word){
	charsDict = {};
	for (char of word){
		if (char in charsDict) {
			charsDict[char]++;
		} else {
			charsDict[char] = 1;
		}
	}
	return charsDict;
}

// Checks if two char count dictionaries are equal
function charDictsEqual(charDictA, charDictB){
	for (var key in charDictA) {
		if (charDictA[key] !== charDictB[key]){
			return false;
		}
	}
	return true;
}