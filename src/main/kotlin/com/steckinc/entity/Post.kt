package com.steckinc.entity

import org.springframework.data.jpa.repository.JpaRepository
import javax.persistence.*

@Entity
@Table(name = "Post")
class Post(
        @Column(name = "header")
        var header: String = "",

        @Column(name = "text")
        var body: String = "",

        @SequenceGenerator(name = "post_seq", sequenceName = "post_seq")
        @Id @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "post_seq")
        @Column(name = "id")
        var id: Long = 0,

        @OneToMany(mappedBy = "post", fetch = FetchType.EAGER)
        var comments: List<Comment> = emptyList()
)

interface PostRepository : JpaRepository<Post, Long>