
import fs from "fs";


export function writeFile(data, fileName = "./output.js") {
  const jsonStructure = JSON.stringify(data, null, 2);

  fs.writeFile(
    fileName,
    `export const tableStructure = ${jsonStructure};`,
    "utf-8",
    (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }

      console.log("JSON structure saved to " + fileName);
    },
  );
}
