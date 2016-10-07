saveProducts(function*() {
  yield '/products/javascript-application-design'
  yield '/products/barbie-doll'
  if (addToCart) {
    return '/cart'
  } else {
    return '/wishlists/nerd-items'
  }
})

saveProducts(productList)
  .then(data => console.log("Saved", data))

