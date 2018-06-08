package com.makersacademy.acebook.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.Date;

@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(
        value = {"createdAt"    },
        allowGetters = true
)
@Data
@Entity
@Table(name = "POSTS")
public class Post {

    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at", nullable = false, updatable = false)
    @CreatedDate
    private Date createdAt;

    @Column(name = "content")
    private String content;

    private Post() {}

    public Post(String content) {
        this.content = content;
    }


    public Date getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(Date createdAt){
        this.createdAt = createdAt;
    }

}
