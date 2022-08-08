// Procedural Programming = as it grows, it's multiple non-DRY code / spaghetti code. OOP fixes this
// f() = functions
// x = variables
// Procedural Programming Example
let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage (baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}
// ------------------------------------------------------------
// OOP is based on the concept of objects. Takes real world objects and representing in code. 
// Taking PC monitor: Add attributes/properties(color, size) and functions/methods(turn off/on).

// Encapsulation Example (less parameters) to reduce complexity + increase reusability
// f() = method
// x = property
let employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
};
employee.getWage();

// Abstraction: Simpler interface, reduce the Impact of Change.
// only exposes necessary details of the user. Hides underlying implementation
// such as calling for a function that is imported from another file so you only see the function get called, but not what's behind it.

// Inheriteance: eliminates redundant code
// allows you to create different objects and reuse the same methods unless it is overridden. 
// (if program has a character speak with talk(), if theres another character you can extend and reuse talk() unless you change the function specifically for new character.)

// Polymorphism: Many forms. Refactors ugly switch/case statements. Can call a different method while the program is running.

