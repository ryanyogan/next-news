import fetch from "node-fetch";
import { Category, Post } from "../shared/types";
import { config } from "./config";

export const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch(`${config.baseUrl}/posts`);
  return res.json();
};

export const fetchCategories = async (): Promise<Category[]> => {
  const res = await fetch(`${config.baseUrl}/categories`);
  return res.json();
};
