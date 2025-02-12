import work from './src/script.js';



import fs from "fs";
import { writeFile } from "./src/writeFile.js";

// export default function () {
fs.readFile("./index.html", "utf-8", (err, html) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const clearValueWithChildren = work(html);

  writeFile(clearValueWithChildren);
});


