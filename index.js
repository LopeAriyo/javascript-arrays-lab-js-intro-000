var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
var destructivelyAppendKitten = function (name){

  kittens.push(name)
  return kittens

}

var destructivelyPrependKitten = function (name){

  kittens.unshift(name)
  return kittens

}

var destructivelyRemoveLastKitten = function (name){
  kittens.pop()
  return kittens
}

var destructivelyRemoveFirstKitten = function (name) {
  kittens.shift()
  return kittens
}

var appendKitten = function (name){

}

var prependKitten = function (name){

}

var removeLastKitten = function (name){

}

var removeFirstKitten = function (name){

}
