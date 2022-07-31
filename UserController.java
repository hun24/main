package com.codessquad.qna.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {

    @GetMapping("/create")
    public String create(String userid, String password, String username, String useremail) {
        System.out.println("아이디 : " + userid);
        System.out.println("비밀번호 : " + password);
        System.out.println("이름 : " + username);
        System.out.println("이메일 : " + useremail);
        return "index";
    }
}
