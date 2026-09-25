import {readFile,writeFile} from "node:fs/promises"
import { join, basename, extname } from "node:path"

const filePath = join("files","texto.txt")

await readFile(filePath,"utf-8").then(data => {console.log(data)})

console.log("Log de ejecucion");
console.log(`El nombre del archivo es: ${basename(filePath)} y su extension es: ${extname(filePath)}`);
