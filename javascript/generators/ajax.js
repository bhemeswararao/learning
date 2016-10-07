function makeAjaxCall(url, cb) {
  var result
  if (url === "https://api.smartcitizen.me") result = {"hello": "world"}
  else if (url === "https://api.smartcitizen.me/devices") result = {"another": "msg"}
  else result = {"error": "message"}

  setTimeout(function() { cb(result) }, 1000)
}

function request(url) {
  makeAjaxCall(url, function(response){
    it.next(response)
    // console.log(response)
  })
}

function *main() {
  var result1 = yield request("https://api.smartcitizen.me")
  var data = result1

  var result2 = yield request("https://api.smartcitizen.me/devices")
  var resp = result2

  console.log("you asked for " + resp.another)
}

var it = main()
it.next()
