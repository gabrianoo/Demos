package com.gability.demos.oauth2.client;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;

@RestController
public class ClientController {

    @GetMapping("/*")
//    @PreAuthorize("#oauth2.hasScope('read')")
    public String home(HttpServletRequest request, Principal principal) {
        return "Hello OAuth2 User";
    }

    @GetMapping("/redirected")
    public Principal redirected(Principal principal) {
        return principal;
    }
}
