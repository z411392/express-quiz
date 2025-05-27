import { default as express, Router } from "express"
import { createServer } from "node:http"

const router = Router()

router.get("/", (req, res) => {
    res.send("Hello World!")
})

export default () => {
    const app = express().use(router)
    const server = createServer(app)
    process.on("exit", () => server.close())
    return server
}
