'use strict';
const popsicle = require('popsicle');

module.exports = toSymbol => {

	if (typeof toSymbol === 'string') {
		toSymbol = toSymbol.toUpperCase();
	} else {
		toSymbol = 'BTC,USD,EUR,GBP,CHF,THB,AUD,INR';
	}

	return popsicle.request({
		method: 'POST',
		url: 'https://min-api.cryptocompare.com/data/price',

		query: {
			fsym: 'ETH',
			tsyms: toSymbol,
      sign: true
		}
	})
		.use(popsicle.plugins.parse(['json']))
		.then(resp => resp.body)
		.then(data => {
			const symbols = Object.keys(data);
      // console.log(data);
			return symbols
				.map(symbol => `${symbol}: ${data[symbol]}`);
		});
};
