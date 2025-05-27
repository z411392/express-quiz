import { createConsola } from "consola"
import yargs from "yargs"
import serve from "@/cli/serve"
import merge from "@/cli/merge"

const logger = createConsola().withTag(`main`)
process.on("SIGINT", (_) => process.exit(-1))
process.on("uncaughtException", (thrown) => logger.error((thrown as Error).message))
const main = () => yargs.command(serve).command(merge).help().parse()
main()
