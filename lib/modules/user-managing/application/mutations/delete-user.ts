import CallableInstance from "callable-instance"
import { type UserManager } from "@/adapters/mocked/user-manager"

export type DeletingUser = {
    userId: string
}

export class DeleteUser extends CallableInstance<[DeletingUser], Promise<void>> {
    protected userManager: UserManager
    constructor({ userManager }: { userManager: UserManager }) {
        super(`execute`)
        this.userManager = userManager
    }
    async execute({ userId }: DeletingUser) {
        return await this.userManager.deleteUser(userId)
    }
}
