const myName = 'Eric'

function printName() {
    console.log(myName)
}

printName()
//^ this is a full closure

function outerFunction(outerVariable) {
    const outer2 = 'Hi'
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable)
        console.log('Inner Variable: ' + innerVariable)
        console.log(outer2)
    }
}
const newFunction = outerFunction('outside')
newFunction('inner')
//^ common use case for closures

const names = ['Eric', 'George', 'Milton', 'James'];
names.sort();
console.log(names);