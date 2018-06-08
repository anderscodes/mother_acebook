package com.makersacademy.acebook.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
class User {

    private @Id @GeneratedValue Long id;
    private String username;
    private String password;

    private User() {}

    public User(String username, String password) { this.username = username; this.password = password; }
}
