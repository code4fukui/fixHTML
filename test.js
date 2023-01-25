import * as t from "https://deno.land/std/testing/asserts.ts";
import { fixHTML } from "./fixHTML.js";

Deno.test("simple", () => {
  t.assertEquals(fixHTML("＜html＞"), "<html>");
});
