const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {
	let arr = expr.split('');
	let startString = 0;
	let endString = 10;
	let downArr;
	let centralArr = [];
	let downArr2 = [];
	let result;
	let sortArr;
	let letterStr = '';

	while (endString <= arr.length) {
		downArr = arr.slice(startString, endString);
		startString += 10;
		endString += 10;
		centralArr.push(downArr);
	}
	for (let i = 0; i < centralArr.length; i++) {
		downArr2 = centralArr[i];
		if (downArr2[0] != 0) {
			result = downArr2.join('')
		} else {
			for (let j = 0; j < downArr2.length; j++) {
				if (downArr2[j] == '0') {
					downArr2[j] = ' ';
				} else if (downArr2[j] == '1') {
					break;
				}
				sortArr = downArr2.filter(elem => elem !== ' ');
			}
			result = sortArr.join('');
		}



		let sum = [];
		let start = 0;
		let end = 2;
		let downArr3;
		let arr = result.split('');
		while (end <= arr.length) {
			downArr3 = arr.slice(start, end);
			start += 2;
			end += 2;
			sum.push(downArr3.join(''));
		}
		for (let j = 0; j < sum.length; j++) {
			if (sum[j] == '10') {
				sum[j] = '.';
			} else if (sum[j] == '11') {
				sum[j] = '-';
			}
		}
		let letterStrMaterial = sum.join('');

		if (MORSE_TABLE[letterStrMaterial] != undefined) {
			letterStr += MORSE_TABLE[letterStrMaterial];
		} else {
			letterStr += ' ';
		}
	}
	return letterStr;
}

module.exports = {
	decode
}