import 'rxjs/add/operator/toPromise';

import {Component} from '@angular/core';
import {PostService} from "./post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  template: `
    <div class="container">
      <div class="row">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Header</label>
            <input type="text" 
                   class="form-control"
                   aria-describedby="emailHelp"
                   id="header"
                   name="header"
                   [(ngModel)]="header"
                   placeholder="Enter Post Header">
            <small id="emailHelp" class="form-text text-muted">Please, think twice before doing this.</small>
          </div>
          <div class="form-group">
            <label for="exampleTextarea">Content</label>
            <textarea class="form-control" 
                      id="body"
                      name="body"
                      placeholder="Enter Post Text"
                      [(ngModel)]="body"
                      rows="3"></textarea>
          </div>
          <button class="btn btn-primary"
                  type="button"
                  [disabled]="!header || !body"
                  [ladda]="sending"
                  (click)="createPost()">
            Submit Post
          </button>
          <button class="btn btn-default"
                  type="button"
                  (click)="cancel()">
            Cancel
          </button>
        </form>
      </div>
    </div>
  `,
  styleUrls: []
})
export class NewPostComponent {
  public sending: boolean = false;
  public header: string;
  public body: string;

  constructor(private postService: PostService,
              private router: Router) {
  }

  public async createPost(): Promise<void> {
    if (this.header && this.body) {
      try {
        this.sending = true;
        const number = await this.postService.createPost(this.header, this.body).toPromise();
        this.router.navigate(['posts', number]);
      } finally {
        this.sending = false;
      }
    }
  }

  public cancel(){
    this.router.navigate(['posts']);
  }
}
