package com.steckinc

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

@Controller
class StaticController {
    @RequestMapping("/")
    fun index(): String{
        return "/resources/index.html";
    }
}