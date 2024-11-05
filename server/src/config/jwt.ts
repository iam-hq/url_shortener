import jwt from "jsonwebtoken";
import httpError from "http-errors";

const JWT_PVT_KEY = process.env.JWT_PVT_KEY as string;

export const generateToken = async (payload: { [key: string]: any }) =>
  jwt.sign(payload, JWT_PVT_KEY, { expiresIn: "30d" });

export const validateToken = async (token: string) => {
  try {
    const content = jwt.verify(token, JWT_PVT_KEY);
    return content as { [key: string]: any };
  } catch (e) {
    throw new httpError.Unauthorized("Invalid token!");
  }
};
