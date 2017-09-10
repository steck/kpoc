package com.steckinc

import com.steckinc.dtos.PostDto
import com.steckinc.services.DataService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController
class DataController(val dataService: DataService) {
    @GetMapping("/posts")
    fun posts(): List<PostDto> = dataService.loadAllPost()

    @GetMapping("/posts/{id}")
    fun post(@PathVariable("id") id: Long): PostDto = dataService.loadWithComment(id)
}