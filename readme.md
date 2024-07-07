# Employee Management System

### Overview
The Employee Management System is a simple CRUD (Create, Read, Update, Delete) application built using Node.js and MySQL. It allows users to manage employee records, including creating new employees, reading existing records, updating details, and deleting records.

### Features
- Create: Add new employee records.
- Read: Retrieve a list of all employees.
- Update: Modify existing employee details.
- Delete: Remove employee records from the database.

### Technologies Used
- Backend: Node.js, Express.js
- Database: MySQL
- Other: RESTful APIs, Postman

## Setup and Installation
##### 1. Clone the repository to your local machine.
```bash 
git clone https://github.com/your-username/employee-management-system.git
cd employee-management-system 
```
##### 2. Install the required dependencies.
```bash
npm install
```

##### 3. Setup MySql Database.
```bash
CREATE DATABASE company;
USE company;

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(255),
    department VARCHAR(255),
    salary DECIMAL(10, 2)
);
```
##### 4. Configure environment variables.
DB_HOST=localhost
DB_USER=your-mysql-username
DB_PASSWORD=your-mysql-password
DB_NAME=company

##### 5. Run the application
```bash
npm start
```

##### 6. API Endpoints:
Get all employees: GET /api/employees
Get a specific employee: GET /api/employees/:id
Create a new employee: POST /api/employees
Update an employee: PUT /api/employees/:id
Delete an employee: DELETE /api/employees/:id



