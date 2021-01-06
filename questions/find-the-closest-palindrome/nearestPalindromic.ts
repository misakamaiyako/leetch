export default function nearestPalindromic (n:string):string {
  if (n.length === 1) {
    return String(parseInt(n) - 1)
  }
  if (n === '11') {
    return '9'
  }
  if (/^10+$/.test(n)) {
    return '9'.repeat(n.length - 1)
  }
  if (/^9+$/.test(n)) {
    return String('1' + '0'.repeat(n.length - 1) + '1')
  }
  let length = n.length;
  let big:number = parseInt(n.substring(0, length / 2));
  const bigL = big.toString().length;
  const end:number = parseInt(n.substring((length + 1) / 2));
  let middle:string = n[ (length - 1) / 2 ] || '';
  const end1 = reverse(String(big - 1));
  const end2 = reverse(String(big));
  const end3 = reverse(String(big + 1));
  //(abc -1 )(m)(cba -100)
  const r1 = end1.length === bigL ?
    (10 ** (bigL + middle.length) - (parseInt(end1) - end)) :
    (
      -Math.abs(parseInt(end1) - end)) + (
      (middle === '' || middle === '0') ? 10 ** (bigL - 1) : (10 ** (bigL + middle.length) - 9 * 10 ** middle.length)
    )
  //abc(m)cba
  let r2 = Math.abs(parseInt(end2) - end);
  // abc(m-1)cba
  let r3 = (middle === '' || middle === '0') ? Infinity : 10 ** bigL + end - parseInt(end2);
  // abc(m+1)cba
  let r4 = (middle === '' || middle === '9') ? Infinity : 10 ** bigL + parseInt(end2) - end;
  const r5 = end3.length === bigL ?
    (10 ** (bigL + middle.length) + (parseInt(end3) - end)) :
    (middle === '' || middle === '9') ? 10 ** (bigL - 1) + 1 : (10 ** (bigL + middle.length) - 10 ** middle.length)
  if (r2 === 0) {
    r2 = Number.MAX_SAFE_INTEGER;
  }
  if (r1 <= r2 && r1 <= r3 && r1 <= r4 && r1 <= r5) {
    return big - 1 + (end1.length !== bigL ? (middle === '0' ? '99' : String(parseInt(middle || '10') - 1)) : middle) + end1;
  }
  if (r3 <= r2 && r3 <= r4 && r3 <= r5){
    return big+String(parseInt(middle)-1)+end2;
  }
  if (r2 <= r4 && r2 <= r5) {
    return big + middle + end2;
  }
  if (r4<=r5){
    return big+String(parseInt(middle)+1)+end2;
  }
  return big + 1 + (end3.length !== bigL ? (middle === '9' ? '' : String(parseInt(middle) + 1)) : middle) + end3;
}

function reverse (s:string):string {
  let n:string = '';
  const sLength = s.length;
  for (let i = 0; i < sLength; i++) {
    n = s[ i ] + n;
  }
  return n;
}
