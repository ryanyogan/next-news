import React, { FunctionComponent } from "react";
import { Comment as CommentType, EntityId } from "../../shared/types";
import { CommentForm } from "../CommentForm";
import { Container, Item, List } from "./style";
import { Comment } from "../Comment";

interface CommentsProps {
  post: EntityId;
  comments: CommentType[];
}

export const Comments: FunctionComponent<CommentsProps> = ({
  post,
  comments,
}) => {
  return (
    <Container id="comments">
      <h3>Comments</h3>
      <List>
        {comments.map((comment) => (
          <Item key={comment.id}>
            <Comment comment={comment} />
          </Item>
        ))}
      </List>
      <CommentForm post={post} />
    </Container>
  );
};
