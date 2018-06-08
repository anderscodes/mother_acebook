package com.makersacademy.acebook.repository;

import com.makersacademy.acebook.model.Hello;
import org.springframework.data.repository.CrudRepository;

public interface HelloRepository extends CrudRepository<Hello, Long> {

}
