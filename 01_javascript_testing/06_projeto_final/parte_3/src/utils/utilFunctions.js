const formatCurrencyToBRL = (currency) =>
	currency.toLocaleString('pt-br', { currency: 'BRL', style: 'currency' });

const formatDateToDayMonthNameYear = (date) => {
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	return date.toLocaleDateString('pt-br', options);
};

module.exports = { formatCurrencyToBRL, formatDateToDayMonthNameYear };
