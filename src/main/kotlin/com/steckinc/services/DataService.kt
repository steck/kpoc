package com.steckinc.services

import com.steckinc.dtos.PostDto
import com.steckinc.entity.Comment
import com.steckinc.entity.CommentRepository
import com.steckinc.entity.PostRepository
import org.springframework.stereotype.Service

@Service
class DataService(val postRepository: PostRepository) {
    fun loadAllPost() : List<PostDto>{
        return postRepository.findAll().map { PostDto.fromPost(it) }
    }

    fun loadWithComment(id: Long) : PostDto{
        return  PostDto.fromPost(postRepository.findOneWithDependencies(id))
    }

    fun addComment(id: Long, text: String) : PostDto{
        val post = postRepository.findOneWithDependencies(id)
        post.comments.add(Comment(body = text, post = post))
        return  PostDto.fromPost(postRepository.saveAndFlush(post))
    }
}