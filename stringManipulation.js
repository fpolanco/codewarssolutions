/* 1. Determine if a string is a palindrome. 
*    Palindrome definition: https://en.wikipedia.org/wiki/Palindrome
*    
*   Input: string
*   Output: boolean
*   Example - input: 'anna', output: true
*   Notes - spaces and special characters don't count
*/
// a n n a
// a     b
//compare the letters, if the same, b = b - 1; a = a + 1; loop again, a === a is TRUE
// a n n a
//   a b      a = 1, b = 2
//compare the letters, if the same, b = b - 1; a = a + 1; loop again, a === a is TRUE
// a n n a
//   b a     a = 2, b = 1

//' ', '?',','
// str = anna 
// ['a','n','n','a']. filter()
// does 'a' exist in the ignoreChars array? ignoreChars = [' ','?',','], FALSE
// chars=['a','n','n','a']

function isPalindrome(str) {
  str = str.toLowerCase();
  const ignoreChars = [' ', '?', ',']
  const chars = str.split('').filter(char => !ignoreChars.includes(char));
  let a = 0;
  let b = chars.length - 1;
  
  while(a < b){
    if(chars[a] === chars[b]){
      b = b - 1;
      a = a + 1;
    } else {
      return false; 
    }
  }
  
  return true;
}

// //Case 1
// s1 = 'anna' //true
// console.log(isPalindrome(s1))

// //Case 2
// s2 = 'Tenet' //true
// console.log(isPalindrome(s2))

// //Case 3
// s3 = 'race a car' //false
// console.log(isPalindrome(s3))

// //Case 4
// s4 = 'Eva, can I see bees in a cave?' //true
// console.log(isPalindrome(s4))

//------------------------------------------------------------

/* 2. Determine if 2 strings are anagrams.
*    Anagram definition: https://en.wikipedia.org/wiki/Anagram
*    
*   Input: string1, string2
*   Output: boolean
*   Example - input: ('pot', 'top'), output: true
*/

function isAnagram(str1, str2) {
  
}


//Case1
s11 = 'cinema'
s12 = 'iceman' //true
// isAnagram(s11, s12)

//Case 2
s21 = 'Debit Card'
s22 = 'Bad Credit' //true
// isAnagram(s21, s22)

//Case 3
s31 = 'Listens'
s32 = 'Silent' //false
// isAnagram(s31, s32)


//------------------------------------------------------------

/* 3. Given a string, and a set of characters
 * return the substring representing the SMALLEST
 * window containing those characters.
 *
 * The characters don't need to appear in the order in which they are given.
 *
 * If not all the characters are present in the string, return the empty string.
 *
 *
 * Input: str (String), chars (String)
 *
 * Output: String
 *
 *
 * Example:
 *  Input: "ADOBECODEBANC", "ABC"
 *  Output: "BANC"
 *
 *  Input: "HELLO WORLD", "FOO"
 *  Output: ""
*/
//input is string
//output substring that holds chars

// function minWindow(str, chars) {
//   let start = -1;
//   let substring = '';
//   let minSubstring= '';
//   const charsVisited = {};
//   {
//     'A': 1
//   }
//   for (let end = 0; end < str.length; end++){
//     if(str[end] in charsVisited){
//       // if(start < 0) start = end;
//       charsVisited[str[end]]++ 
//         charsVisited[str[end]] = end+1;
//       }

//     }
//     if(//our substring has one of each letters from `chars`){
//       //if minSubstring.length === 0, minSubstring = substring;
//       //else compare the length of the current minSubstring to the substring variable, 
//       //  and save the substring that is smaller in `minSubstring`
//       //move `start` to another letter
//       //
//     }
//   }
// }

str = "ADONC"
chars = "ABC"
//answer - BANC
// console.log(minWindow(str, chars))




