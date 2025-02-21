import work from './src/script.js';

import iconv from 'iconv-lite';
import fs from "fs";
import { writeFile } from "./src/writeFile.js";

fs.readFile("./index.html", (err, html) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const decodedContent = iconv.decode(html, 'win1251');

  const clearValueWithChildren = work(decodedContent, {
    VALUE_STR_NUM: 20,
    HEADER_STR_NUM: 7,
    START_HEADER_STR_NUM: 12
  });

  writeFile(clearValueWithChildren);
});


