import React, { FunctionComponent } from "react";
import { useRouter } from "next/router";
import { Post as PostType } from "../../shared/types";
import { GetStaticProps } from "next";
import { fetchPost } from "../../api/post";
import { postPaths } from "../../shared/staticPaths";
import { PostBody } from "../../components/Post/PostBody";
import { Loader } from "../../components/Loader";

interface PostProps {
  post: PostType;
}

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  if (typeof params.id !== "string") {
    throw new Error("Unexpected id");
  }

  const post = await fetchPost(params.id);
  return { props: { post } };
};

export const getStaticPaths = async () => {
  return { paths: postPaths, fallback: true };
};

const Post: FunctionComponent<PostProps> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return <PostBody post={post} />;
};

export default Post;
