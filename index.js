// Code your solution here
function findMatching(array, name) {
    return array.filter( driver => 
        driver.toLowerCase() === name.toLowerCase()
    )
}

function fuzzyMatch(array, name) {
    return array.filter( driver =>
        driver.toLowerCase().indexOf(name.toLowerCase()) === 0
        )
}

function matchName(array, name) {
    return array.filter( n =>
        n.name === name )
}