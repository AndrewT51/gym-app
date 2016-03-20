'use strict';

var grid = [
  'A','B','B','A','A',
  'A','C','D','E','C',
  'B','E','C','E','D',
  'B','C','D','D','C',
  'A','D','E','C','E'
]


var string = 'ABBAA|ACDEC|BECED|BCDDC|ADECE';
// console.log(grid.indexOf('C'))
var a = "A";
var b = "C";
var re = new RegExp(a + '.....' + b + '|' + a + b , 'g');
console.log((/DA|AD|D.....A|A.....D/).test(string))
// console.log(string.match(re))