package com.makersacademy.acebook.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
class MessagesRestController {

  @GetMapping("/api/messages")
  public List<String> getMessages(Principal principal) {
    return null;
  }
}