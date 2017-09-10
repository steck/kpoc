package com.steckinc.entity

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import javax.persistence.*

@Entity
@Table(name = "Post")
@SequenceGenerator(name = "post_seq", sequenceName = "post_seq", initialValue = 1, allocationSize = 1)
class Post(
        @Column(name = "header")
        var header: String = "",

        @Column(name = "text")
        var body: String = "",

        @SequenceGenerator(name = "post_seq", sequenceName = "post_seq")
        @Id
        @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "post_seq")
        @Column(name = "id")
        var id: Long,

        @OneToMany(mappedBy = "post", cascade= arrayOf(CascadeType.ALL))
        var comments: MutableList<Comment> = ArrayList()
)

interface PostRepository : JpaRepository<Post, Long> {
    @Query("select p from Post p inner join fetch p.comments c where p.id = ?1")
    fun findOneWithDependencies(id: Long): Post
}