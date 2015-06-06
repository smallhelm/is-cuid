var test = require('tape');
var cuid = require('cuid');
var isCuid = require('./index');

var n_tests = 1000000;
test('Make ' + n_tests + ' cuids and test them', function(t){
  t.plan(n_tests);
  var i;
  for(i=0; i<n_tests; i++){
    t.ok(isCuid(cuid()));
  }
});

test('things that are not cuids', function(t){
  [
    null,
    undefined,
    {},
    [],
    cuid,
    isCuid,
    [cuid()],
    {'c23': cuid()},
    'c',
    'c123',
    'c1234567890 ',
    'c1234567890 12',
    'c1234567890-12',
    "c1234567890\n12",
    "c1234567890\t12"
  ].forEach(function(v){
    t.notOk(isCuid(v), v);
  });
  t.end();
});
