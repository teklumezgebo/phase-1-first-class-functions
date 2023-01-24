const returnFirstTwoDrivers = function (first) {
    return first.slice(0,2)
}


const returnLastTwoDrivers = function (last) {
    return last.slice(0,2)
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (integer) {
     return function multiply(fare) {
        return integer * fare 
    }
}


const fareDoubler = function (fare) {
    return fare * 2
}

const fareTripler = function(fare) {
    fare * 3
}
 

const selectDifferentDrivers = function (diverNames, positionFinder) {
    return positionFinder(diverNames)
}