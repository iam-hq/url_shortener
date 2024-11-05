import "dotenv/config";
import Koa from "koa";
import cors from "@koa/cors";
import helmet from "koa-helmet";
import bodyParser from "koa-bodyparser";
import knex, { onDatabaseConnect } from "./config/knex";
import { createShortURL } from "./services/urls";
import router from "./routes";

const app = new Koa();

app.use(cors());
app.use(helmet());
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

const main = async () => {
  try {
    await onDatabaseConnect();
    console.log("Database Connected!");
    // Database Ready

    app.listen(Number(process.env.PORT), () => console.log("Server Started"));
  } catch (error) {
    console.log(error);
  }
};

main();
