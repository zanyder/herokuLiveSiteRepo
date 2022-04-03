import { promises } from "fs";
const fsPromises = promises; // alias

export async function getData()  {     return await fsPromises.readFile("./Data/users.json", "utf8", (err, data) => data);     }