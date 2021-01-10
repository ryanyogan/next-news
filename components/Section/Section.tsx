import React, { FunctionComponent } from "react";
import { Post } from "../Post";
import { Grid, MoreLink, Title } from "./style";
import { Post as PostType } from "../../shared/types";
import Link from "next/link";

interface SectionProps {
  title: string;
  posts: PostType[];
  isCompact?: boolean;
}

export const Section: FunctionComponent<SectionProps> = ({
  title,
  posts,
  isCompact = false,
}) => {
  return (
    <section>
      <Title>{title}</Title>
      <Grid>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Grid>

      {isCompact && (
        <Link href={`/category/${title}`} passHref>
          <MoreLink>More in {title}</MoreLink>
        </Link>
      )}
    </section>
  );
};
