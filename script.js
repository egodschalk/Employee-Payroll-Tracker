// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let keepAddingEmployees = true;
const employeesArray = [];

// Collect employee data

function collectEmployees() {
  while (keepAddingEmployees) {

    // TODO: Get user input to create and return an array of employee objects
    const firstName = prompt("Enter employee's first name:");
    const lastName = prompt("Enter employee's last name:");
    const salary = parseFloat(prompt("Enter employee's salary:"));
 

    console.log(firstName);
    console.log(lastName);
    console.log(salary);

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    }

    employeesArray.push(employee);
    console.log(employeesArray);

    var keepAddingEmployees = confirm("Do you want to enter more Employees?");
    if(keepAddingEmployees) {
      collectEmployees();
    } else {
      displayEmployees();
      displayAverageSalary();
    }
  }
  return employeesArray;
}

// collectEmployees();

const employeeData = collectEmployees();
console.log(employeeData);

// Display the average salary
function displayAverageSalary (employeesArray) {
  // TODO: Calculate and display the average salary

  let sum = 0;
  let count = 0;

  const salaryInput = employeesArray.salary;
  console.log(salaryInput);

  for (let i = 0; i < employeesArray.length; i++) {
    sum += employeesArray[i];
    count++

    if (count > 0) {
      const average = sum / count;
      console.log(`The average of the numbers entered is: ${average}`);
    } else {
      console.log("No valid numbers entered to calculate the average.");
    }
  }
  return sum / employeesArray.length;

}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  if (employees.length > 0) {
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[randomIndex];
    console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
  } else {
    console.log("No employees available to select.");
  }
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    //HTML OBJECT
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
