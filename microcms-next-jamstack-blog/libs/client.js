import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "p9339acvas",
  apiKey: process.env.API_KEY,
});
