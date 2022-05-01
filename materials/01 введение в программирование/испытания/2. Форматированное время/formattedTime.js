// !лучшее
export default (rawMinutes) => {
	const hours = Math.floor((rawMinutes / 60) % 24);
	const formattedHours = hours >= 10 ? hours : `0${hours}`;

	const minutes = rawMinutes % 60;
	const formattedMinutes = minutes >= 10 ? minutes : `0${minutes}`;

	return `${formattedHours}:${formattedMinutes}`;
};

// !вариант 1
//? решение не корректное т.к. если часов будет больше чем 48 (например 49), то функция не сработает, она отнимит 24 часа и вернет 25.
const formattedTime = (time) => {
	const hoursCount = (time) => {
		const hours = Math.floor(time / 60);
		if (hours > 9 && hours <= 24) {
			return String(hours);
		} else if (hours < 10) {
			return "0" + String(hours);
		} else {
			return "0" + String(hours - 24);
		}
	};
	const minutesCount = (time) => {
		const minutes = time % 60;
		if (minutes > 9) {
			return String(minutes);
		} else {
			return "0" + String(minutes);
		}
	};
	return `${hoursCount(time)}:${minutesCount(time)}`;
};

export default formattedTime;

// !вариант 2
function hoursCount(num) {
	const hourses = Math.floor(num / 60);
	if (hourses <= 23) {
		return hourses;
	};
	const result = (hourses - 24) * 60;
	return hoursCount(result);
};

function minutsCount(num) {
	return (num >= 60) ? num % 60 : num;
};

const formattedTime = (num) => {
	let finalHourses;
	let finalMinutes;
	if (hoursCount(num) < 10) {
		finalHourses = String(`0${hoursCount(num)}`);
	} else {
		finalHourses = String(`${hoursCount(num)}`)
	}

	if (minutsCount(num) < 10) {
		finalMinutes = String(`0${minutsCount(num)}`);
	} else {
		finalMinutes = String(`${minutsCount(num)}`)
	}
	return `${finalHourses}:${finalMinutes}`
};
