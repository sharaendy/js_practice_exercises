const length = (str) => str.length;
const toUpperCase = (str) => str.toUpperCase();

const solution = (str) => {
	let result = toUpperCase(str[0]);
	for (let i = 1; i < length(str); i += 1) {
		if (str[i - 1] === ' ') {
			result += toUpperCase(str[i]);
		} else {
			result += str[i];
		}
	}
	return result;
};

export default solution;

console.log(solution('hello, world!'));//('Hello, World!');
console.log(solution('  hello,   world!'));//('  Hello,   World!');
console.log(solution(' many different words inside sentence'));//(' Many Different Words Inside Sentence');