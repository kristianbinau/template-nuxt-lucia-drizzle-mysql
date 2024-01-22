import { lucia } from "lucia";
import { mysql2 } from "@lucia-auth/adapter-mysql";
import { h3 } from "lucia/middleware";

import { connection } from "./db.js";

// expect error (see next section)
export const auth = lucia({
  env: process.dev ? "DEV" : "PROD",
  middleware: h3(),
  adapter: mysql2(connection, {
    user: "auth_user",
    key: "user_key",
    session: "user_session",
  }),
  getUserAttributes: (data) => {
    return {
      username: data.username,
    };
  },
});

export type Auth = typeof auth;
