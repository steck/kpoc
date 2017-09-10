import {Injectable} from "@angular/core";
import {Post} from "./entity/post";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {
  }

  public loadPosts(): Observable<Post[]> {
    return this.http.get<Post[]>("posts");
  }

  public loadPostWithComments(id: number): Observable<Post> {
    return this.http.get<Post>(`posts/${id}`);
  }
}
