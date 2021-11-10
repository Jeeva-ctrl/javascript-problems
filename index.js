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

console.log(typeof sum); // function
console.log('Recursive Sum', sum(2)(4)(6)());

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
