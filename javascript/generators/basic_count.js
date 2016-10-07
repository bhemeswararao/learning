function count(n) {
  var res = []
  for (var x = 0; x < n; x++) {
    res.push(x)
  }
  return res
}

for (var x of count(5)) {
  console.log(x)
}

// function* count() {
//   for (var x = 0; true; x++ ) {
//     yield x
//   }
// }

// for (var x of count()) {
//   console.log(x)
// }