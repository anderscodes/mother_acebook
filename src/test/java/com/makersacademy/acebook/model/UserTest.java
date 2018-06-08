package com.makersacademy.acebook.model;

import static org.hamcrest.CoreMatchers.containsString;
import static org.junit.Assert.*;

import org.junit.Test;

public class UserTest {

    private User user = new User("kimikiml", "crazysexycool");

    @Test
    public void userHasUsername() { assertThat(user.getUsername(), containsString("kimikiml"));}

    @Test
    public void userHasPassword() { assertThat(user.getPassword(), containsString("crazysexycool"));}

}