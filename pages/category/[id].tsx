import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";
import { fetchPosts } from "../../api/category";
import { Loader } from "../../components/Loader";
import { Section } from "../../components/Section";
import { categoryPaths as paths } from "../../shared/staticPaths";
import { Post } from "../../shared/types";

interface CategoryProps {
  posts: Post[];
}

export const getStaticProps: GetStaticProps<CategoryProps> = async ({
  params,
}) => {
  if (typeof params.id !== "string") {
    throw new Error("Unexpected id");
  }

  const posts = await fetchPosts(params.id);
  return { props: { posts } };
};

export const getStaticPaths = async () => {
  return { paths, fallback: true };
};

const Category: FunctionComponent<CategoryProps> = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return <Section posts={posts} title={String(router.query.id)} />;
};

export default Category;
