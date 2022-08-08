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

// Encapsulation Example (less parameters)
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

// Abstraction



// Inheriteance



// Polymorphism




