import { ZenkakuAlpha } from "https://code4fukui.github.io/mojikiban/ZenkakuAlpha.js";
import { esreform } from "https://code4fukui.github.io/esreform/esreform.js";

export const fixMyHTML = (src) => {
  const s = ZenkakuAlpha.toHan(src);
  let n = 0;
  const ss = [];
  for (;;) {
    const m = s.indexOf("<script", n);
    if (m < 0) {
      break;
    }
    const k = s.indexOf(">", m);
    if (k < 0) {
      break;
    }
    const m2 = s.indexOf("</" + "script>", k + 1);
    if (m2 < 0) {
      break;
    }
    const src = s.substring(k + 1, m2);
    if (src.trim() == "") {
      ss.push(s.substring(n, m2 + 9));
    } else {
      const src2 = src.trim() == "" ? src : esreform(src);
      ss.push(s.substring(n, k + 1) + "\n");
      ss.push(src2);
      ss.push("\n</" + "script>");
    }
    n = m2 + 9;
  }
  ss.push(s.substring(n));
  return ss.join("");
};
