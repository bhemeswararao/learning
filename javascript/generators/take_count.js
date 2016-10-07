function * count(){
  for (var x = 0; true; x++) {
    yield x
  }
}

function* take(list, n) {
  var i = 0
  for (var x of list) {
    if (n === i++) {
      return
    }
    yield x
  }
}

for (var x of take(count(), 5)) {
  console.log(x)
}