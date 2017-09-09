package com.steckinc.entity

import com.fasterxml.jackson.annotation.JsonIgnore
import org.springframework.data.jpa.repository.JpaRepository
import javax.persistence.*

@Entity
@Table(name = "Comment")
class Comment(
        @SequenceGenerator(name = "comment_seq", sequenceName = "comment_seq")
        @Id @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "comment_seq")
        @Column(name = "id")
        var id: Long = 0,

        @Column(name = "body")
        var body: String = "",

        @ManyToOne
        @JoinColumn(name = "post_id")
        @JsonIgnore
        var post: Post
)

interface CommentRepository : JpaRepository<Comment, Long>