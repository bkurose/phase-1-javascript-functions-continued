// code your solution here
function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`)
}

function mondayWork(activity = "go to the office") {
    return (`This Monday, I will ${activity}.`)
}

function wrapAdjective(emp = '*', adj = 'special') {
    return function inner(adj) {
        return `You are ${emp}${adj}${emp}!`
    }
}
