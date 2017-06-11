const ethPrice = require('./index');

function time(s) {
    return new Date(s).toISOString().slice(-13, -5);
}

ethPrice()
.then( data => {
  console.log(time(Date.now()));
  console.log(data);
});
