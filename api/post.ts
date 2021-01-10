import fetch from "node-fetch";
import { EntityId, Post } from "../shared/types";
import { config } from "./config";

export const fetchPost = async (id: EntityId): Promise<Post> => {
  const res = await fetch(`${config.baseUrl}/posts/${id}`);
  return await res.json();
};
