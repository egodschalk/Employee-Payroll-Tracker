// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = [];


// Collect employee data
const collectEmployees = function() {
    
    let keepAddingEmployees = true;
    console.log("Collecting Employees");
  // TODO: Get user input to create and return an array of employee objects
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

    keepAddingEmployees = confirm("Do you want to enter more Employees?");

  }
  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0;
  let count = 0;

  for (let i = 0; i < employeesArray.length; i++) {
    sum += employeesArray[i].salary;
    count++

}
    // const averageSalary = sum / count;
    const averageSalary = (Math.round(sum / count * 100) / 100).toFixed(2);
    console.log(`The average salary is: $${averageSalary}`);

  return averageSalary;
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  if (employeesArray.length > 0) {
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
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
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