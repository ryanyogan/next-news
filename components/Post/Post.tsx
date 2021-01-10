import Link from "next/link";
import React, { FunctionComponent } from "react";
import { Card, Content, Figure, Title } from "./style";

export const Post: FunctionComponent = () => {
  return (
    <Link href="/post/[id]" as="/post/example" passHref>
      <Card>
        <Figure>
          <img alt="Post Photo" src="/image1.jpg" />
        </Figure>
        <Title>Post title!</Title>
        <Content>
          <p>
            This is just a bunch of random text that probably makes no sense
            because it is not intended to make sense.
          </p>
        </Content>
      </Card>
    </Link>
  );
};
