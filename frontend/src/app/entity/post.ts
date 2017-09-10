import {Comment} from "./comment";

export interface Post {
  id: number;
  header: string;
  body: string;
  comments: Comment[];
}

