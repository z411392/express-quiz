import { type Request, type Response, type NextFunction } from "express"
import { UserManager } from "@/adapters/mocked/user-manager"
import { type CreatingUser, CreateUser } from "@/modules/user-managing/application/mutations/create-user"

export const onCreatingUser = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { name, email } = request.body
        const mutation: CreatingUser = { name, email }
        const handler = new CreateUser({ userManager: new UserManager() })
        const userId = await handler(mutation) // 假設 id 不是事先產生
        response.json({
            success: true,
            data: {
                userId,
            },
        })
    } catch (thrown) {
        next(thrown)
    }
}
