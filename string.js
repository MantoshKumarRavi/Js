const name="mantosh"
const repo=100
console.log(`Hello i am ${name} and my repocount is ${repo}`);

const Gamename= String("mantosh")
console.log(Gamename[0])

console.log(Gamename.__proto__);
console.log(Gamename.__proto__);



console.log(Gamename.length);
console.log(Gamename.toUpperCase());
console.log(Gamename.charAt(0));
console.log(Gamename.charAt(1));
console.log(Gamename.charAt(0));
console.log(Gamename.indexOf('m'));
console.log(Gamename.indexOf('M'));  // return -1 if not matched
console.log(Gamename.indexOf('t'));


const newSrting= Gamename.substring(0,4);
console.log(newSrting);
console.log(typeof newSrting );


const newstringOne= "mantosh   "

// replace methode
const url ="https://mantosh.com/mantosh%20kumar%20ravi";
const urlReplace= url.replace('%20' ,' ')
const urlReplaceOne= url.replace("%20" ,"-")
console.log(urlReplace)
console.log(urlReplaceOne)
console.log(url)
console.log(url.includes('mantosh'))

// splite
spleteVar = " mantosh.kumar@Gamename.com"
console.log(spleteVar.split('.'))
console.log(spleteVar.split('a'))




