function solution(input, markers) {
  markers = '[' + markers.toString().replace(',', '') + '].*';
  let markersRegEx = new RegExp(markers, 'g');  
  let inputLines = input.split('\n');
  inputLines = inputLines.map(line => {
    return line.replace(markersRegEx, '').trim();
  });
  return inputLines.join('\n');
}

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));