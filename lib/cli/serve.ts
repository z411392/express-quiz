import { type ArgumentsCamelCase } from "yargs"
import { createConsola } from "consola"
import { bootstrap } from "@/bootstrap"
import createServer from "@/http"

const command = "serve"
const describe = ""
const builder = {}
const logger = createConsola().withTag("serve")

const handler = async (args: ArgumentsCamelCase<{}>) => {
    await bootstrap()
    const server = createServer()
    server.listen(8080, "0.0.0.0", () => logger.info("express 已啟動"))
    await new Promise<void>((resolve) => process.on("SIGINT", (_) => resolve))
}

export default {
    command,
    describe,
    builder,
    handler,
}
