import { default as express, Router } from "express"
import cors from "cors"
import { createServer } from "node:http"
import { onCreatingUser } from "@/modules/user-managing/presentation/http/controllers/on-creating-user"
import { onListingUsers } from "@/modules/user-managing/presentation/http/controllers/on-listing-users"
import { onDeleteUser } from "@/modules/user-managing/presentation/http/controllers/on-deleting-user"

const router = Router()

router.post("/users", onCreatingUser).get("/users", onListingUsers).delete("/users/:userId", onDeleteUser)

export default () => {
    const app = express()
        .use(express.json({ limit: "50mb" }))
        .use(cors())
        .use(router)
    const server = createServer(app)
    process.on("exit", () => server.close())
    return server
}
