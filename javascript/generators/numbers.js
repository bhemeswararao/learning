function* numbers() {
  yield 1
  yield 2
  return 3
  yield 4
}

var g = numbers()
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())