export default function nearestPalindromic (n:string):string {
  if (n.length === 1) {
    return String(parseInt(n) - 1)
  }
  let length = n.length;
  let big:number = parseInt(n.substring(0, length / 2));
  const bigL = big.toString().length;
  const end:number = parseInt(n.substring((length + 1) / 2));
  let middle:string = n[ (length - 1) / 2 ] || '';
  const end1 = reverse(String(big - 1));
  const end2 = reverse(String(big));
  const end3 = reverse(String(big + 1));
  const r1 = end1.length === bigL?
    (10 ** (bigL + middle.length) + Math.abs(parseInt(end1)-end)):
    (
      Math.abs(parseInt(end1)-end))+(
      (middle===''||middle==='0')? 10**bigL:(10 ** (bigL + middle.length)-9*10**middle.length)
    )
    //Math.abs(-(10 ** (bigL + middle.length)) + parseInt(end1) - end - (end1.length === bigL ? 0 : (middle == '' ? -9 : (parseInt(middle==='0'?'10':middle) - 1)) * (10 ** (bigL -1))));
  let r2 = Math.abs(parseInt(end2) - end);
  const r3 = end3.length === bigL?
    (10 ** (bigL + middle.length) + Math.abs(parseInt(end1)-end)):
    (middle===''||middle==='9')? 10**bigL:(10 ** (bigL + middle.length)-10**middle.length)
  //Math.abs(10 ** (bigL + middle.length) + parseInt(end3) - end - (end3.length === bigL ? 0 : (middle == '' ? 0 : parseInt(middle)) * (10 ** bigL)));
  if (r2 === 0) {
    if (middle === '') {
      r2 = Number.MAX_SAFE_INTEGER;
    } else {
      if(middle==='0'){
        r2 = 2 * 10**(bigL-1);
      } else {
        r2 = 10 ** bigL;
      }
    }
  }
  if (r1 <= r2 && r1 <= r3) {
    return big - 1 + (end1.length !== bigL ? (middle === '0' ? '9' : String(parseInt(middle || '10') - 1)) : middle) + end1;
  }
  if (r2 < r1 && r2 <= r3) {
    return big +(end1.length !== bigL ? middle === '0' ? '1' : (middle !== '' ? String(parseInt(middle) - 1) : ''):middle) + end2;
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
