package com.makersacademy.acebook.model;

import javax.persistence.*;

import lombok.Data;

@Data
@Entity
@Table(name = "POSTS")
public class Post {

    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;

    @Column(name = "content")
    private String content;

    private Post() {}

    public Post(String content) {
        this.content = content;
    }

}
