export const counterChildren = (count: number) => {
	if (count === 0) {
		return '';
	} else if (count === 1) {
		return `${count} ребенок от 5 лет`;
	} else if (count >= 2 && count <= 4) {
		return `${count} ребенка от 5 лет`;
	} else if (count >= 5) {
		return `${count} детей от 5 лет`;
	}
};
