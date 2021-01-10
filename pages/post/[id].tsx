import React, { FunctionComponent } from "react";
import { useRouter } from "next/router";

const Post: FunctionComponent = () => {
  const { pathname, query } = useRouter();

  return (
    <div>
      Pathname: {pathname};<br />
      Post ID: {query.id}.
    </div>
  );
};

export default Post;