/* You are to create a collection of employee's information for your company. Each employee has the following attributes:

Name
Job title
Salary
Status
First, you will create an array named employees.

Next, you will create an Employee constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to "Full Time".

This constructor will also have a method called printEmployeeForm that prints the employee's information to the console.

(e.g. "Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time")

You will then:

1  Instantiate three employees
2  Override the status attribute of one of them to either "Part Time" or "Contract"
3  Call the printEmployeeForm method for each employee
4  Put the generated employees into the employees array using whichever method you prefer. */

let namedEmployees = [];

function Employee(name, jobTitle, salary, status = "Full-time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = () => console.log(
        `Name: ${name} Job Title: ${jobTitle} Salary: ${salary} Status: ${status}`
        );
    namedEmployees.push(this);
}

const tom = new Employee("Tom", "Head Security", "$100,000");
const jerry = new Employee("Jerry", "Cook", "$75,000");
const spike = new Employee("Spike", "Guard", "$25,000", "Part-time");

tom.printEmployeeForm();
console.log("-------------------------------------")
jerry.printEmployeeForm();
console.log("-------------------------------------")
spike.printEmployeeForm();
console.log("-------------------------------------")

console.log(namedEmployees);