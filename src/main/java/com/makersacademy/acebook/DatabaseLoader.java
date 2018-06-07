package com.makersacademy.acebook;


import com.makersacademy.acebook.model.Post;
import com.makersacademy.acebook.model.User;
import com.makersacademy.acebook.repository.PostRepository;
import com.makersacademy.acebook.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

  private final PostRepository repository;
  private final UsersRepository usersRepository;

  @Autowired
  public DatabaseLoader(PostRepository repository, UsersRepository usersRepository) {
  	this.repository = repository;
  	this.usersRepository = usersRepository;

  }

  @Override
  public void run(String... strings) throws Exception {
  	this.repository.save(new Post("Hey, folks! Welcome to Acebook!"));
    this.repository.save(new Post("Keep up the great work! :)"));
    this.usersRepository.save(new User("Igor", "Ryabchuk"));
  }



}
