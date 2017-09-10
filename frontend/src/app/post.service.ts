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

  public loadPostWithComments(id: number | string): Observable<Post> {
    return this.http.get<Post>(`posts/${id}`);
  }

  public postComment(id: number | string, text: string): Observable<Post> {
    return this.http.post<Post>(`posts/${id}`, text);
  }
}
