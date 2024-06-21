package com.example.employManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.employManagement.dto.EmployeeDto;
import com.example.employManagement.model.Credentials;
import com.example.employManagement.model.Employee;
import com.example.employManagement.service.EmployService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api")
public class EmployController {
	@Autowired
	EmployService employeeService;
	@GetMapping("/employee")
	public List<Employee> getAllEmployees(){
		return employeeService.getAllEmployees();
	}
	 @PostMapping("/register")
	    public ResponseEntity<Employee> registerEmployee(@RequestBody EmployeeDto emp) {
	        Employee savedEmployee = employeeService.saveEmployee(emp);
	       
	        return new ResponseEntity<>(savedEmployee,HttpStatus.CREATED);
	    }
		
	@GetMapping("/employee/{id}")
	public Employee getEmployeeId(@PathVariable Long id) {
		return employeeService.getEmployeeById(id);
	}
	@PutMapping("/employee/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,@RequestBody Employee employee)
	{
		return employeeService.updateEmployee(id,employee);
	}
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<HttpStatus> deleteEmploy(@PathVariable Long id)
	{
			return employeeService.deleteEmploy(id);
	}
	@PostMapping("/login")
	public String login(@RequestBody Credentials login) {
		System.out.println(login.getEmail() + " " + login.getPassword());
		return employeeService.loginData(login);
	}

}
