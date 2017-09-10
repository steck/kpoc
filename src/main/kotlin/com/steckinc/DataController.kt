package com.steckinc

import com.steckinc.dtos.PostDto
import com.steckinc.services.DataService
import org.springframework.web.bind.annotation.*

@RestController
class DataController(val dataService: DataService) {
    @GetMapping("/posts")
    fun posts(): List<PostDto> = dataService.loadAllPost()

    @GetMapping("/posts/{id}")
    fun post(@PathVariable("id") id: Long): PostDto = dataService.loadWithComment(id)

    @PostMapping("/posts/{id}")
    fun comment(@PathVariable("id") id: Long, @RequestBody body: String): PostDto
            = dataService.addComment(id, body)
}