package com.gability.demos.react;

import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class SecuredController {

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("/secured/user")
    public Principal getUserRoleSecuredInfo(Principal principal) {
        return principal;
    }

    @Secured("ROLE_ADMIN")
    @GetMapping("/secured/admin")
    public Principal getAdminRoleSecuredInfo(Principal principal) {
        return principal;
    }
}
