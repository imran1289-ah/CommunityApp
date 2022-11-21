package com.login.demo.controller;

import com.login.demo.model.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class Login {

    @GetMapping("/")
    public String login(){
        return "login";
    }

    @PostMapping("/success")
    public String loginSuccess(@ModelAttribute User user){
        if (user.getUsername().equals("imran") && user.getPassword().equals("soen343")) {
            return "success";
        }
        return "error";
    }
}
