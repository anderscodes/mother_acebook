package com.makersacademy.acebook.model;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "USERS")
public class Users {
  private @Id @GeneratedValue(strategy = GenerationType.AUTO) Long id2;

  @Column(name = "firstName")
  private String firstName;

  @Column(name = "lastName")
  private String lastName;

  private Users() {};

  public Users(String firstName, String lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
