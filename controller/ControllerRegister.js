import { apiPost } from "../js/api.js";

export async function createUser(user) {
  await apiPost("/auth/register", user.toJSON());
  console.log(user);
}
