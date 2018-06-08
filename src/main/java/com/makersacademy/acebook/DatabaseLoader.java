package com.makersacademy.acebook;


import com.makersacademy.acebook.model.Hello;
import com.makersacademy.acebook.model.Post;
import com.makersacademy.acebook.repository.HelloRepository;
import com.makersacademy.acebook.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

  private final PostRepository repository;
  private final HelloRepository repository2;


    @Autowired
  public DatabaseLoader(PostRepository repository, HelloRepository repository2) {
  	this.repository = repository;
  	this.repository2 = repository2;
    }


    @Override
  public void run(String... strings) throws Exception {
  	this.repository.save(new Post("Hey, folks! Welcome to Acebook!"));
    this.repository.save(new Post("Keep up the great work! :)"));
    this.repository2.save(new Hello("Blahdeeblahblah"));

    }
}

