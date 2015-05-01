/**
 * An IE8 safe forEach function
 * @param  {Array} array - Array of things to iterate over
 * @param  {Function} fn - the function to be called on each iteration
 */
module.exports = function(array, fn) {
    for (var i = 0; i < array.length; i++) {
        fn(array[i], i);
    }
}