// https://www.codewars.com/kata/strings-mix/train/javascript

function mix(s1, s2) {
  // {'s1':[['a', 3], ['b', 4]], 's2':[['c', 5]]}
  let freqs = {'s1': [], 's2': []};
  for (let key in freqs) {
    eval(key).split('').filter(c => /[a-z]/i.test(c)).forEach(letter => {
      let exists = false;
      letter = letter.toLowerCase();
      for (let i = 0; i < freqs[key].length; i++){
        if (freqs[key][i][0] == letter) {
          freqs[key][i][1] += 1
          exists = true;
        }
      }
      if (!exists) { freqs[key].push([letter, 1]) };
    });
    // sort in descending order by freq
    freqs[key].sort((a,b) => {
      if (b[1] === a[1]) { return b[0] - b[1] }
      return b[1] - a[1];
    });
    // remove letters with freq of 1
    freqs[key] = freqs[key].filter(freq => freq[1] > 1);
  }
  console.log(freqs);
  return formatFreqs(freqs);
}

function formatFreqs(freqs) {
  // check if s1 includes char you're checking from s2 -- if not, add s2 to the string
  // same for s2!!!
  let freqStr = '';
  for (let i = 0; i < freqs['s1'].length; i++) {
    for (let j = 0; j < freqs['s2'].length; j++) {
      let s1Letter = freqs['s1'][i][0], s2Letter = freqs['s2'][j][0];
      if (s1Letter === s2Letter) {
        let s1Freq = freqs['s1'][i][1], s2Freq = freqs['s2'][j][1]; 
        if (s1Freq > s2Freq) {
          freqStr += ('1:' + s1Letter.repeat(s1Freq) + '/');
        } else if (s1Freq < s2Freq) {
          freqStr += ('2:' + s2Letter.repeat(s2Freq) + '/');
        } else {
          freqStr += (`=:` + s1Letter.repeat(s1Freq) + '/');
        } 
      }
    }
  }
  return freqStr;
}

console.log(mix("Are the kids at home? aaaaa fffff", "Yes they are here! aaaaa fffff"));