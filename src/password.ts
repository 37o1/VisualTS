import { randomBytes } from "crypto";
import { writeFile } from "fs/promises";

const password = randomBytes(64).toString("base64");
writeFile("frontend/src/password.ts", `export default "${password}"`, "utf-8");

export default password;