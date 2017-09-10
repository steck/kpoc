import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from "./post.service";
import {Post} from "./entity/post";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'KPOC the APP!';
  public posts: Post[] = [];

  private subscription: Subscription;

  constructor(private postService: PostService) {
  }

  public ngOnInit(): void {
    this.subscription = this.postService.loadPosts().subscribe(data => this.posts = data);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
