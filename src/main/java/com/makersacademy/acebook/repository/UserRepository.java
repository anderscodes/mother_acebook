package com.makersacademy.acebook.repository;


import com.makersacademy.acebook.model.Users;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<Users, Long> {

}
