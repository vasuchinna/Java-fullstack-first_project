package com.example.employManagement.dto;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component
@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeDto {
      
	
	public String firstName;
	
	public String lastName;
	
	public String email;
}
