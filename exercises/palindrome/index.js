// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	const arr = str.split('');

	let isPalindrome = true;

	for (let index = 0; index < arr.length / 2; index++) {
		if (arr[index] !== arr[arr.length - index - 1]) {
			isPalindrome = false;
			break;
		}
	}

	return isPalindrome;
}

module.exports = palindrome;
