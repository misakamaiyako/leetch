export default function isMatch(s: string, p: string): boolean {
	if(p==='*') return true
	p = p.replace(/\?/g,'.').replace(/\*+/g,'.*')
	console.log(p);
	return new RegExp('^'+p + '$').test(s)
}
