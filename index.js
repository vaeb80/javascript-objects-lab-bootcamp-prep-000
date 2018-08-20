var recipes = {}
function updateObjectWithKeyAndValue(object, key, value){
  var temp = Object.assign(object, {key = value})
  return temp
}

