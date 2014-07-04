/**
 * do something when a sequence of keys is entered on an element
 * @param callback function to call when sequence is matched is matched
 * @param sequence array of key codes to match against
 */
$.fn.cheatcode = function(callback, sequence) {
  "use strict";
  // up, down, left, right, left, right, a, b, a, b, enter
  var k = sequence || [38,40,37,39,37,39,65,66,65,66,13],
    kl = k.length,
    ks = JSON.stringify(k),
    s = [];

  this.on('keyup', function(event) {

    if(s.length === kl)
      s.shift();

    s.push(event.keyCode);

    if(s.length === kl && JSON.stringify(s) === ks)
      callback();

    return this;
  });
};
