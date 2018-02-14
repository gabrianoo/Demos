package com.gability.demos.oauth2.provider;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class UserController {

    @GetMapping("/me")
    public Principal getPrincipal(Principal principal) {
        return principal;
    }
}
