import { client } from "../utils/axios.utils";

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await client.post("users/login", {
      email,
      password,
    });
    return response;
  } catch (error: any) {
    console.log(error);
  }
};
