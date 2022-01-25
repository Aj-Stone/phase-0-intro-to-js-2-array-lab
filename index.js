const cats = ['Milo','Otis','Garfield']

function destructivelyAppendCat(name) {
    return cats.push(name)
}
destructivelyAppendCat(Tiger)

function destructivelyPrependCat(name){
    return cats.unshift(name)
}
destructivelyPrependCat(Lilly)

function destructivelyRemoveLastCat(){
    return cats.pop()
}
destructivelyRemoveLastCat

function destructivelyRemoveFirstCat(){
    return cats.shift()
}
destructivelyRemoveFirstCat
function appendCat(name){
    return [...cats,(name)]
}
appendCats(Monet)

function prependCat(){
    return ["Arnold",...cats]
}
prependCat

function removeLastCat(){
    return cats.slice(0,cats.length-1)
}
removeLastCat

function removeFirstCat(){
    return cats.slice(1)
}
removeFirstCat