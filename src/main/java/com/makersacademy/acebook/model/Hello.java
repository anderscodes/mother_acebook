package com.makersacademy.acebook.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity

public class Hello {

    private @Id @GeneratedValue Long id;
    private String content;

    private Hello() {}

    public Hello(String content) { this.content = content; }

}
