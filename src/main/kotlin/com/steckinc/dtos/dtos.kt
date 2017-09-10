package com.steckinc.dtos

import com.steckinc.entity.Comment
import com.steckinc.entity.Post
import org.hibernate.Hibernate

data class PostDto(val id: Long, val header: String, val body: String, val comments: List<CommentDto>) {
    companion object {
        fun fromPost(post: Post): PostDto {
            if (Hibernate.isInitialized(post.comments)) {
                return PostDto(post.id, post.header, post.body, post.comments.map { CommentDto.fromComment(it) })
            } else {
                return PostDto(post.id, post.header, post.body, emptyList())
            }
        }
    }
}

data class CommentDto(val body: String) {
    companion object {
        fun fromComment(comment: Comment): CommentDto = CommentDto(comment.body)
    }
}