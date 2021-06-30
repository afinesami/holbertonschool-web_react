
const getFullYear = () => {
	let current_year = new Date().getFullYear();
	return current_year;
}

const getFooterCopy = (isIndex) => {
	if (isIndex) {
		return "Holberton School";
	} else {
		return "Holberton School main dashboard";
	}
}

module.exports = {
	getFooterCopy,
	getFullYear,
};
