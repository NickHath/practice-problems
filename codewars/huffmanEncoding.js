// https://www.codewars.com/kata/huffman-encoding/train/javascript

// takes: String; returns: [ [String,Int] ] (Strings in return value are single characters)
function frequencies(s) {
  let strArr = s.split('');
  let frequencies = [];
  let strSet = new Set(strArr);
  strSet.forEach(c => frequencies.push([c, 0]));
  strArr.forEach(c => {
    frequencies.forEach(leaf => leaf[0] === c ? leaf[1] += 1 : null);
  })
  if (frequencies.length <= 1) { return null; };
  return frequencies.sort((a, b) => b[1] - a[1]);
}

// takes: [ [String,Int] ], String; returns: String (with "0" and "1")
function encode(freqs,s) {
  // create binary nested array
  if (freqs.length <= 1) { return null; };
  let leastToMost = freqs.reverse();
  let BST = [];
  let encodings = {};
  for (let i = 0; i < leastToMost.length; i++) {
    let leaf = leastToMost[i];
    if (leastToMost[i + 1]) {
      encodings[leaf[0]] = encodings[leaf[0]] ? encodings[leaf[0]] += '1' : '1';
      encodings[leastToMost[i + 1][0]] = encodings[leastToMost[i + 1][0]] ? encodings[leastToMost[i + 1][0]] += '0' : '0';
      BST.unshift([leastToMost[i + 1], leaf]);
      i++;
    } else {
      BST.unshift([leaf]);
    }
  }
  BST.forEach((node, i) => node.forEach(leaf => {
    encodings[leaf[0]] = encodings[leaf[0]] ? encodings[leaf[0]] += i : i.toString();
  }))
  return BST;
  return s.split('').map(c => encodings[c]).join('');
}

// takes [ [String, Int] ], String (with "0" and "1"); returns: String
function decode(freqs,bits) {
  if (freqs.length <= 1) { return null; };
}
//frequencies('aaabbc');
encode([['a', 5], ['b', 2], ['c', 1]], "aaaabcc");