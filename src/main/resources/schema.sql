create sequence post_seq;
CREATE TABLE Post(
  id INTEGER NOT NULL DEFAULT post_seq.nextval PRIMARY KEY ,
  header NVARCHAR2(50) NOT NULL ,
  text TEXT NOT NULL ,
);

create sequence comment_seq;
CREATE TABLE Comment (
  id INTEGER NOT NULL DEFAULT comment_seq.nextval PRIMARY KEY ,
  body NVARCHAR2(150) NOT NULL ,
  postId INTEGER NOT NULL ,
  FOREIGN KEY (postId) REFERENCES Post(id)
);