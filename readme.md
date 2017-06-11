## get-eth-price
A price checker returning the current ETH price in various currencies including BTC

## Install
```
npm install -S get-eth-price
```

## Require/Import + Usage
```js
const ethPrice = require('get-eth-price');
function time(s) {
    return new Date(s).toISOString().slice(-13, -5);
}
//its a promise- data is an array
ethPrice()
.then( data => {
  console.log(time(Date.now()));
  console.log(data);
});
// default:
//[ 'BTC: 0.1175',
//  'USD: 339.71',
//  'EUR: 301.61',
//  'GBP: 249.01',
//  'CHF: 329.59',
//  'THB: 11074.11',
//  'AUD: 464.9',
//  'INR: 22800' ]
```

## License
MIT

## Possible improvements?
* Pull down historical data
* Control over exchange used
* Average of exchanges




## API
[CryptoCompare API](https://min-api.cryptocompare.com/)
