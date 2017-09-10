import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from "./post.service";
import {Post} from "./entity/post";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post',
  template: `
    <div class="container">
      <div class="row">
        <div class="blog-post">
          <h2 class="blog-post-title">{{ post?.header}}</h2>
        </div>
        <p> {{ post?.body }} </p>
      </div>
    </div>
    <hr/>
    <div class="container">
      <div *ngFor="let comment of post?.comments">
        <p> {{ comment.body }} </p>
      </div>
    </div>
  `,
  styleUrls: []
})
export class PostComponent implements OnInit, OnDestroy {
  public post: Post;

  private subscription: Subscription;

  constructor(private postService: PostService,
              private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.subscription = this.postService.loadPostWithComments(id)
      .subscribe(data => this.post = data);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
