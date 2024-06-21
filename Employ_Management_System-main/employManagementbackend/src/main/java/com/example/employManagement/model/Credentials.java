package com.example.employManagement.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Credentials {
    @Id
    private String email;
    
    @Column
    private String password;

    // No need for explicit getters and setters because @Data generates them automatically
}


