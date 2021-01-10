import fetch, { Response } from "node-fetch";
import { EntityId, Person } from "../shared/types";
import { config } from "./config";

export const fetchComments = async (postId: EntityId): Promise<Comment[]> => {
  const res = await fetch(`${config.baseUrl}/comments/${postId}`);
  return await res.json();
};

export const submitComment = async (
  postId: EntityId,
  name: Person,
  comment: string
): Promise<Response> => {
  return await fetch(`${config.baseUrl}/posts/${postId}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({ name, comment }),
  });
};
