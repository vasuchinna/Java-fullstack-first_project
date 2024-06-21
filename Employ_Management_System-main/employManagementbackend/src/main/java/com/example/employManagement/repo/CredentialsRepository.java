package com.example.employManagement.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.employManagement.model.Credentials;


@Repository
public interface CredentialsRepository extends JpaRepository<Credentials, String> {
    Optional<Credentials> findByEmail(String email);
    
	 
	
}

