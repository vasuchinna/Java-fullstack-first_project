package com.example.employManagement.repo;





import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.employManagement.model.Employee;

@Repository
public interface EmployRepository extends JpaRepository <Employee,Long>{

	

	

}
