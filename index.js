var recipes = {}
function updateObjectWithKeyAndValue(object, key, value){
  var temp = {}
  temp[key] = value
  return Object.assign(object, temp)
}

