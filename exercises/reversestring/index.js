// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//*  solution one
//     const arr = str.split("");
//     arr.reverse();
//     return arr.join("");
// }
function reverse(str) {
    return str.split("").reduce((group, el) => {
        return el + group;
    }, "");
}

module.exports = reverse;
