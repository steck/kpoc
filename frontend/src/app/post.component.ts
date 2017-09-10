import 'rxjs/add/operator/toPromise';

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
      <div class="form-group">
        <textarea class="form-control"
                  id="comment"
                  name="comment"
                  rows="3"
                  [(ngModel)]="text"></textarea>
      </div>
      <div class="form-group">
        <button class="btn btn-primary"
                [disabled]="!text"
                [ladda]="sending"
                (click)="sendComment()">
          Send comment
        </button>
      </div>
    </div>
  `,
  styleUrls: []
})
export class PostComponent implements OnInit {
  public post: Post;
  public text: string = "";
  public sending: boolean = false;

  private id: string;

  constructor(private postService: PostService,
              private route: ActivatedRoute) {
  }

  public async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get("id");
    this.post = await this.postService.loadPostWithComments(this.id).toPromise();
  }

  public async sendComment() {
    if (this.text) {
      this.sending = true;
      try {
        this.post = await this.postService.postComment(this.id, this.text).toPromise();
      } finally {
        this.sending = false;
        this.text = "";
      }
    }
  }
}
