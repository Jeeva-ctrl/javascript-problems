// Import stylesheets
import './style.css';

/*
 * Recursive sum using currying
 */

const sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    } else {
      return a;
    }
  };
};

//ES6

const sum1 = (a) => (b) => b ? sum1(a + b) : a;

console.log(typeof sum); // function
console.log('Recursive Sum', sum(2)(4)(6)());

/*
 * Polyfill for map
 */

const arr1 = [1, 2, 3, 4];

Array.prototype.mapPolyfill = function (cb) {
  let tempArr = [];

  for (let i = 0; i < this.length; i++) {
    tempArr.push(cb(this[i]));
  }
  return tempArr;
};
console.log(
  'map ',
  arr1.map((x) => x * 2)
);
console.log(
  'map polyfill',
  arr1.mapPolyfill((x) => x * 2)
);

/*
 * Polyfill for filter
 */

Array.prototype.filterPolyfill = function (cb) {
  let tempArr = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      tempArr.push(this[i]);
    }
  }
  return tempArr;
};

console.log(
  'filter ',
  arr1.filter((x) => x > 2)
);
console.log(
  'filter polyfill',
  arr1.filterPolyfill((x) => x > 2)
);

/* 
  Polyfill for bind
*/

const user = { name: 'John' };

function PrintName() {
  console.log('My name is ', this.name);
}

const bindprintName = PrintName.bind(user);
console.log('bindprintName', bindprintName()); //My name is  John

Function.prototype.bindPolyfill = function (newObj) {
  return () => this.apply(newObj);
};

const bindPolyfillprintName = PrintName.bindPolyfill(user);
console.log('bindPolyfillprintName', bindPolyfillprintName()); //My name is  John

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
