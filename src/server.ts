import { env } from "./environment/env";
import { App } from "./app";
import { __middleware } from "./middleware/middleware";
import { allRoutes } from "./routes";

const dotenv = require('dotenv');
dotenv.config()

const PORT: number = env().port; 
const app = new App(PORT, __middleware, allRoutes);

try {
  // /* Connect to MongoDB*/
  // const {user, pw, name, account} = env().db;
  // const DB_URI = env().db.uri(user,pw,name,account);
  app.mongoDB(env().db);
  
} catch(e) {
  console.log(e);
  console.log("Failed to create DB Connection string");
}

app.listen();