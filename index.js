const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat() {
    cats.splice(3, 0, 'Ralph')
}

function destructivelyPrependCat() {
    cats.splice(0, 0, 'Bob')
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat() {
    const newCats = [...cats, 'Broom']
    return newCats
}

function prependCat() {
    const newCats = ['Arnold', ...cats]
    return newCats
}

function removeLastCat() {
    const newCats = [...cats]
    newCats.pop()
    return newCats
}

function removeFirstCat() {
    const newCats = [...cats]
    newCats.shift()
    return newCats
}