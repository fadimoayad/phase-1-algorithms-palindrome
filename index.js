function isPalindrome(word) {
  for(let i=0;i<word.length;i++){
    if(word[0] === word[word.length-1]){
      return true
    }else{
  return false

    }
  }
}

/* 
  Add your pseudocode here
  1-create a function called isPalindrome 
  2 assign a argument to isPalindrome
  3- create a counter to walk into each letter in the word 
  4-compare first letter with the last letter 
*/

/*
isPalindrome function is function to return true (by comparing the first letter with the last letter with if statment) 
if the first letter was similer to the last letter other wise it return false
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
