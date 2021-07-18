function funWithAnagrams(text) {
  let result = [];
  function checkForAnagram(word) {
    return result.some(r => {
      if (r.length !== word.length) {
        return false
      }
      return word.split('').sort().toString() === r.split('').sort().toString();
    })
  }
  for (let word of text) {
    if (!result.includes(word) && !checkForAnagram(word)) {
      result.push(word)
    }
  }
  return result
}
let test = ["poke", "pkoe", "okpe", "ekop"]
let test2 = ["code", "aaagmnrs", "anagrams", "doce"]
console.log(funWithAnagrams(test2))



