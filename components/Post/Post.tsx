import Link from "next/link";
import React, { FunctionComponent } from "react";
import { Card, Figure, Lead, Title } from "./style";
import { Post as PostType } from "../../shared/types";

interface PostProps {
  post: PostType;
}

export const Post: FunctionComponent<PostProps> = ({ post }) => {
  return (
    <Link href="/post/[id]" as={`/post/${post.id}`} passHref>
      <Card>
        <Figure>
          <img alt={post.title} src={post.image} />
        </Figure>
        <Title>{post.title}</Title>
        <Lead>{post.lead}</Lead>
      </Card>
    </Link>
  );
};
