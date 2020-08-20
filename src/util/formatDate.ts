export default (dateStr: any) => {
	const date = new Date(dateStr);
	const actualMonth = date.getMonth() + 1;
	const mm = actualMonth < 10 ? `0${actualMonth}` : actualMonth;
	const dd = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay();
	const yyyy = date.getFullYear();
	return `${mm}/${dd}/${yyyy}`;
};
