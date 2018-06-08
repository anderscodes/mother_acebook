package com.makersacademy.acebook.model;


import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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


  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getFirstName() {
    return firstName;
  }

  public String getLastName() {
    return lastName;
  }

}
