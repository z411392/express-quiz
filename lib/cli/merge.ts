import { type ArgumentsCamelCase, type Argv } from "yargs"
import { createConsola } from "consola"
import { bootstrap } from "@/bootstrap"
import { onMergingUsers } from "@/modules/user-managing/presentation/cli/on-merging-users"

const command = "merge"
const describe = ""
const builder = (yargs: Argv) =>
    yargs
        .option("inputs", {
            type: "array",
            string: true,
            demandOption: true,
            describe: "List of input file paths",
        })
        .option("output", {
            type: "string",
            demandOption: true,
            describe: "Output file path",
        })
const logger = createConsola().withTag("merge")

const handler = async ({
    inputs,
    output,
}: ArgumentsCamelCase<{
    inputs: string[]
    output: string
}>) => {
    await bootstrap()
    try {
        logger.info(`正在將 ${inputs} 合併至 ${output}`)
        await onMergingUsers({ inputs, output })
    } catch (thrown) {
        logger.error((thrown as Error).message)
    }
}

export default {
    command,
    describe,
    builder,
    handler,
}
