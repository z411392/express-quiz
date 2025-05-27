import { type Request, type Response, type NextFunction } from "express"
import { UserManager } from "@/adapters/mocked/user-manager"
import { ListUsers } from "@/modules/user-managing/application/queries/list-users"

export const onListingUsers = async (request: Request, response: Response, next: NextFunction) => {
    const query = new ListUsers({ userManager: new UserManager() })
    try {
        const users = await query.execute({})
        response.json({
            success: true,
            data: {
                users,
            },
        })
    } catch (thrown) {
        next(thrown)
    }
}
