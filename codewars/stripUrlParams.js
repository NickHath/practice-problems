function stripUrlParams(url, paramsToStrip){
  let splitOnQuery = url.split('?');
  let base = splitOnQuery[0], params;
  let paramsObj = {};  
  if (splitOnQuery.length === 1) {
    return splitOnQuery[0];
  }

  params = splitOnQuery[1];
  let splitParams = params.split('&');

  splitParams.reverse().forEach(param => {
    param = param.split('=');
    if (!paramsToStrip || !paramsToStrip.includes(param[0])) {
    paramsObj[param[0]] = param[1];
    }
  })
  let newParamString = '', firstRun = true;
  splitParams.reverse().forEach(key => {
    let ambersand = firstRun ? '' : '&';
    newParamString += `${ambersand}${key[0]}=${paramsObj[key[0]]}`;
    firstRun = false;
  })
  return base + '?' + newParamString;
}

console.log(stripUrlParams('www.codewars.com?a=1&b=2'));
console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2')) // returns 'www.codewars.com?a=1&b=2'
console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b'])) // returns 'www.codewars.com?a=1'
console.log(stripUrlParams('www.codewars.com', ['b'])) // returns 'www.codewars.com'