package com.makersacademy.acebook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

	@RequestMapping(value = {"/"})

	public String index() {

	    return "index";

	}

    @RequestMapping(value = {"/signup"})

    public String signup() {

        return "signup";

    }

    @RequestMapping(value = {"/signin"})

    public String signin() {

        return "signin";

    }

    @RequestMapping(value = {"/posts"})

    public String posts() {

        return "posts";

    }




}
