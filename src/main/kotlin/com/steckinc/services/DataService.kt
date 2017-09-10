package com.steckinc.services

import com.steckinc.dtos.PostDto
import com.steckinc.entity.PostRepository
import org.springframework.stereotype.Service

@Service
class DataService(val postRepository: PostRepository ) {
    fun loadAllPost() : List<PostDto>{
        return postRepository.findAll().map { PostDto.fromPost(it) }
    }

    fun loadWithComment(id: Long) : PostDto{
        return  PostDto.fromPost(postRepository.findOneWithDependencies(id))
    }
}