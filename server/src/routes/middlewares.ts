import { RouterContext } from "@koa/router";
import {Next} from 'koa'
import httpError from "http-errors";
import { validateToken } from "../config/jwt";

export const requireAuthHandler = async (ctx: RouterContext, next: Next) => {
    const authHeader = ctx.request.headers.authorization;

    if(!authHeader) throw new httpError.Unauthorized("Please provide a token")

    const token = authHeader.split(' ')[1];

    const tokenPayload = await validateToken(token);

    ctx.state.user_id = tokenPayload.id;
    await next();
}