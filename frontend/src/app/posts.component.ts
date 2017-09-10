import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {PostService} from "./post.service";
import {Post} from "./entity/post";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  template: `
    <div class="container">
      <div class="row">
        <button class="btn btn-primary"
                (click)="createPost()">
            Create New Post
        </button>
      </div>
      <div class="row">
        <div class="col-sm-8 blog-main">
          <div *ngFor="let post of posts" class="row">
            <div class="blog-post">
              <h2 class="blog-post-title">{{ post.header}}</h2>
            </div>
            <p> {{ post.body }} </p>
            <p>
              <a [routerLink]="['/posts', post.id]">
                <span class="glyphicon glyphicon-comment"></span>Open comments
              </a>
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
  public posts: Post[] = [];
  public creating: boolean;

  private subscription: Subscription;

  constructor(
    private postService: PostService,
    private router: Router) {
  }

  public ngOnInit(): void {
    this.subscription = this.postService.loadPosts().subscribe(data => this.posts = data);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public createPost(){
    this.router.navigate(['/posts/new']);
  }
}
