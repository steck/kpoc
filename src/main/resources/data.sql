INSERT INTO Post(id,header,text) VALUES (post_seq.nextval,'First post','Be proud of yourself');
INSERT INTO Comment(post_id,id,body) VALUES (post_seq.currval,comment_seq.nextval,'Hi bro!');
INSERT INTO Comment(post_id,id,body) VALUES (post_seq.currval,comment_seq.nextval,'Hell yeah dude');
INSERT INTO Comment(post_id,id,body) VALUES (post_seq.currval,comment_seq.nextval,'Welcome');
INSERT INTO Comment(post_id,id,body) VALUES (post_seq.currval,comment_seq.nextval,'Good job');


INSERT INTO Post(id,header,text) VALUES (post_seq.nextval,'Update','Do not give a fuck');
INSERT INTO Comment(post_id,id,body) VALUES (post_seq.currval,comment_seq.nextval,'Let me disagree with you');
INSERT INTO Comment(post_id,id,body) VALUES (post_seq.currval,comment_seq.nextval,'I would like to do this');
INSERT INTO Comment(post_id,id,body) VALUES (post_seq.currval,comment_seq.nextval,'Are you sane?');
INSERT INTO Comment(post_id,id,body) VALUES (post_seq.currval,comment_seq.nextval,'I do whatever I like');

INSERT INTO Post(id,header,text) VALUES (post_seq.nextval,'Last Message','Do not try to post anything again');
INSERT INTO Comment(post_id,id,body) VALUES (post_seq.currval,comment_seq.nextval,'HA-HA!');
INSERT INTO Comment(post_id,id,body) VALUES (post_seq.currval,comment_seq.nextval,'try something else');
INSERT INTO Comment(post_id,id,body) VALUES (post_seq.currval,comment_seq.nextval,'too much effort');

COMMIT ;