import { type Request, type Response, type NextFunction } from "express"
import { UserManager } from "@/adapters/mocked/user-manager"
import { type DeletingUser, DeleteUser } from "@/modules/user-managing/application/mutations/delete-user"

export const onDeleteUser = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { userId } = request.params
        const mutation: DeletingUser = { userId }
        const handler = new DeleteUser({ userManager: new UserManager() })
        await handler(mutation)
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
