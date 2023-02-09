import * as t from "https://deno.land/std/testing/asserts.ts";
import { fixMyHTML } from "./fixMyHTML.js";

Deno.test("simple", () => {
  t.assertEquals(fixMyHTML("＜html＞"), "<html>");
});
Deno.test("with js", () => {
  t.assertEquals(fixMyHTML("＜html＞<script>if(true)alert(1)</script>"), "<html><script>\nif (true) {\n  alert(1);\n}\n</script>");
});
Deno.test("with js await", () => {
  t.assertEquals(fixMyHTML("＜html＞<script>await alert(1);await alert(2)</script>"), "<html><script>\nawait alert(1);\nawait alert(2);\n</script>");
});
Deno.test("err (no conversion)", () => {
  t.assertEquals(fixMyHTML("＜html＞<script>async alert(1)</script>"), "<html><script>\nasync alert(1)\n</script>");
});
