import { User } from "@/types/projectA";
import { fetcher } from "./apiHandler";

export async function fetchUsers(): Promise<User[]> {
  const res = await fetcher("https://jsonplaceholder.typicode.com/users");
  console.log("res", res);
  if (!res.ok) throw new Error("Failed to fetch posts");

  return res.json();
}
