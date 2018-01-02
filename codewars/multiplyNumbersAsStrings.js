// https://www.codewars.com/kata/multiplying-numbers-as-strings/train/javascript
// use bignum library


function multiply(a, b) {
  let product = (parseInt(a) * parseInt(b)).toFixed(20).toString();
  // if (!product.split('').includes('e')) { return product; };

  // handles scientific notation
  // let preDecimal = product.match(/\d*/)[0];
  // let postDecimal = product.match(/\.\d*/)[0].slice(1);
  // let exponent = parseInt(product.match(/(?=\+)(.*)/)[0].substring(1));
  // if (exponent >= postDecimal.length) {
  //   exponent -= postDecimal.length;
  //   return preDecimal + postDecimal + '0'.repeat(exponent);
  // } else {
  //   return preDecimal + postDecimal.slice(0, exponent) + '.' + postDecimal.slice(exponent);
  // }
}

console.log(multiply('1020303004875647366210 ', '2774537626200857473632627613'))
console.log('2830869077153280552556547081187254342445169156730' == multiply('1020303004875647366210 ', '2774537626200857473632627613'));

