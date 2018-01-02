// https://www.codewars.com/kata/molecule-to-atoms

function parseMolecule(formula) {
  let allBrackets = [];
  // {'K': 4}
  let individualElts = {};
  let brackets = [')', '}', ']']  
  formula = formula.replace(/[A-Z][a-z]?(?=[^0-9])/g, '$&1');
  originalFormula = formula.replace(/\]\d/g,']').replace(/}\d/g,'}').replace(/\)\d/g,')').replace(/[\[{(](.*)[\]})]/g, '');
  originalFormula.split('').forEach((c, i, a) => !isNaN(parseInt(c)) ? individualElts[a[i - 1]] = c : null);
  allBrackets.push(formula.match(/[\[].*[\]]\d+/), formula.match(/[\{].*[\}]\d+/), formula.match(/[\(].*[\)]\d+/)); 
  allBrackets = allBrackets.filter(bracket => bracket).map(bracket => bracket[0]);
  allBrackets = allBrackets.map(bracket => {
    let mult = bracket[bracket.length - 1];
    let elts = bracket.slice(0, bracket.length - 1);
    let nums = bracket.match(/[0-9]/g);
    nums = nums.map(num => (mult * parseInt(num)).toString());
    bracket = bracket.split('').map((c, i, a) => {
      if (brackets.includes(a[i - 1])) { return '' };
      return isNaN(c) ? c : nums.shift();
    });
    return bracket.join('');
   });
   // can't repeat bracket groups (when nested we'd be counting twice)
   return allBrackets;
}

var fremySalt = 'K4[ON(SO3)2]2';
console.log(parseMolecule(fremySalt));