import Router from "@koa/router";
import {getStats} from "../services/stats";

const statRouter = new Router();

statRouter.get("/", async (ctx) => {
  ctx.response.body = await getStats(
    ctx.state.user_id
  );
});

export default statRouter;
