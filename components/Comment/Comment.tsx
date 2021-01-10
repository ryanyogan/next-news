import React from "react";
import { Comment as CommentType } from "../../shared/types";
import { Meta } from "../Post/PostBody/style";
import { Author, Body, Container } from "./style";

interface CommentProps {
  comment: CommentType;
}

export const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <Container>
      <Author>{comment.author}</Author>
      <Body>{comment.content}</Body>
      <Meta>{comment.time}</Meta>
    </Container>
  );
};
