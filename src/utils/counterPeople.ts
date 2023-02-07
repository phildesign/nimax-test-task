export const counterChildren = (count: number, type: string) => {
	let result = '';
	let totalResult = [];
	if ((count >= 5 && count <= 20) || (count % 10 >= 5 && count % 10 <= 9) || count % 10 === 0) {
		result = `, ${count} детей`;
	} else if ((count >= 2 && count <= 4) || (count % 10 >= 2 && count % 10 <= 4)) {
		result = `, ${count} ребенка`;
	} else if (count === 1 || count % 10 === 1) {
		result = `, ${count} ребенок`;
	}

	if (type === 'afterFive' && count !== 0) {
		totalResult.push(`${result} от 5 до 12 лет`);
	}
	if (type === 'beforeFive' && count !== 0) {
		totalResult.push(`${result} до 5 лет`);
	}
	return totalResult.join();
};

export const counterAdults = (count: number) => {
	if (count === 1) {
		return `${count} взрослый`;
	} else return `${count} взрослых`;
};
