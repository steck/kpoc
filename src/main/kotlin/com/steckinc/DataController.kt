package com.steckinc

import com.steckinc.entity.Comment
import com.steckinc.entity.CommentRepository
import com.steckinc.entity.Post
import com.steckinc.entity.PostRepository
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class DataController (
        val postRepository: PostRepository,
        val commentRepository: CommentRepository) {

    @GetMapping("/posts")
    fun posts(): List<Post> = postRepository.findAll()!!;

    @GetMapping("/comments")
    fun comments(): List<Comment> = commentRepository.findAll()!!;
}