// http://www.codewars.com/kata/did-you-mean-dot-dot-dot/train/javascript

function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.findMostSimilar = function(term) {
  // keep track of current min-edit score and previous best
  let minEdits = [];

  // cycle through dictionary words
  this.words.forEach(word =>{
    let currentEdits = 0;  
    let dictLetters = word.split('');
    let searchTermLetters = term.split('');

    // account for insertion and deletion
    currentEdits += Math.abs(searchTermLetters.length - dictLetters.length);
    
    // account for replacement
    searchTermLetters.forEach((letter, index) => {
      if (letter !== word[index] && (word[index] !== undefined)) { 
        currentEdits++; 
      };
    })
    minEdits.push([word, currentEdits]);
  })
  return minEdits;
  return minEdits.sort((a, b) => a[1] - b[1])[0][0];
}

console.log(intersection('beer'.split(''), 'barrel'.split('')));

// dont delete letters if multiple
// barrel - beer should return ['a', 'r', 'l'] and []
// not ['a', 'l'] and []
function intersection(firstArr, secondArr) {
  let filteredOut = [];
  let lettersInCommon =  firstArr.filter((letter) => secondArr.includes(letter)).length;
  let firstNoCommons = firstArr.filter(letter => !secondArr.includes(letter));
  let secondNoCommons = secondArr.filter(letter => !firstArr.includes(letter));
  return [lettersInCommon, firstNoCommons, secondNoCommons];
}

languages = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
console.log(languages.findMostSimilar('heaven')); // must return "java"
// languages.findMostSimilar('javascript'); // must return "javascript" (same words are obviously the most similar ones)