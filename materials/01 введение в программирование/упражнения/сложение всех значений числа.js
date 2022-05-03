// функция принимает число и складывает всего его значения
// моё решение
const length = (str) => str.length;

function sumDigits(num) {
	num = String(num);

	let i = 0;
	let result = 0;

	while (i < length(num)) {
		result = result + Number(num[i]);
		i += 1;
	};
	return result;
};

// console.log(sumDigits(0)); //0
// console.log(sumDigits(1)); //1
// console.log(sumDigits(5)); //5
// console.log(sumDigits(10)); //1
// console.log(sumDigits(12)); //3
// console.log(sumDigits(38)); //11
// console.log(sumDigits(19)); //10

const addDigits = (num) => {
	if (num > 9) {
		return addDigits(sumDigits(num));
	}
	return num;
}

console.log(addDigits(0)); //0
console.log(addDigits(5)); //5
console.log(addDigits(10)); //1
console.log(addDigits(19)); //1
console.log(addDigits(38)); //2
console.log(addDigits(598997686567)); //4
console.log(addDigits(999999999999)); //9


//решение эталонное
const sumDigits = (num) => {
	const str = String(num);
	let result = 0;
	for (let i = 0; i < length(str); i += 1) {
		result += Number(str[i]);
	}

	return result;
};

const addDigits = (num) => {
	let result = num;
	while (result >= 10) {
		result = sumDigits(result);
	}

	return result;
};

export default addDigits;