import { unstable_getServerSession as getServerSession } from "next-auth";
import { MOCK_USER } from "./mockUser";

export const unstable_getServerSession = async (req, res, authOptions) => {
  if (process.env.NEXT_PUBLIC_MOCK_NEXT_AUTH) {
    return {
      user: MOCK_USER,
    };
  }
  return getServerSession(req, res, authOptions);
};
