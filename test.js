import * as t from "https://deno.land/std/testing/asserts.ts";
import { fixMyHTML } from "./fixMyHTML.js";

Deno.test("simple", () => {
  t.assertEquals(fixMyHTML("＜html＞"), "<html>");
});
