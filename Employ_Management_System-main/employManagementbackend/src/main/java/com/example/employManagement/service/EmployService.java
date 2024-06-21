package com.example.employManagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.employManagement.dto.EmployeeDto;
import com.example.employManagement.exception.ResourceNotFoundException;
import com.example.employManagement.model.Credentials;
import com.example.employManagement.model.Employee;
import com.example.employManagement.repo.CredentialsRepository;
import com.example.employManagement.repo.EmployRepository;



@Service
public class EmployService {
	@Autowired
	EmployRepository employRepository;
	@Autowired
	CredentialsRepository credentialsRepo;
	public List<Employee> getAllEmployees(){
		return employRepository.findAll();
	}
	
public Employee saveEmployee(EmployeeDto emp) {
	     Employee emp1 = new Employee();
	       emp1.setFirstName(emp.getFirstName());
	       emp1.setLastName(emp.getLastName());
	       emp1.setEmail(emp.getEmail());
        
	return employRepository.save(emp1);
    }

public Employee getEmployeeById(Long id) {
	return employRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Id Not Found"));
	
	
}

public ResponseEntity<Employee> updateEmployee(Long id, Employee employee) {
	// TODO Auto-generated method stub
	Employee emp=employRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee Does not exist"));
	emp.setFirstName(employee.getFirstName());
	emp.setLastName(employee.getLastName());
	emp.setEmail(employee.getEmail());
	Employee updateEmp=employRepository.save(emp);
	return ResponseEntity.ok(updateEmp);
}
public ResponseEntity<HttpStatus> deleteEmploy(long id){
	Employee emp=employRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Id does not exist"));
	employRepository.delete(emp);
	return new ResponseEntity<>(HttpStatus.OK);
}
public String loginData(Credentials login) {
     Credentials credential =  credentialsRepo.findByEmail(login.getEmail()).orElseThrow(()->new RuntimeException("this email is not correct"));
	if(credential.getPassword().equals(login.getPassword())) {
		return "loginSuccessfull";
	}
	else {
		return "wrongCredentials";
	}
}



}
