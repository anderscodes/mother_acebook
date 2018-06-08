package com.makersacademy.acebook.model;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "USERS")
public class User {
  private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;

  @Column(name = "firstName")
  private String firstName;

  @Column(name = "lastName")
  private String lastName;

  private User() {};

  public User(String firstName, String lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
