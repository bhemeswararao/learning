function* demo() {
  var res = yield 10
  if (res === 32) return 42
}

var d = demo()
var resA = d.next()
var resB = d.next(32)
console.log(d.next())