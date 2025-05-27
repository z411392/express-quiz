import CallableInstance from "callable-instance"
import { type UserManager, type User } from "@/adapters/mocked/user-manager"

export type ListingUsers = {}

export class ListUsers extends CallableInstance<[ListingUsers], Promise<User[]>> {
    protected userManager: UserManager
    constructor({ userManager }: { userManager: UserManager }) {
        super(`execute`)
        this.userManager = userManager
    }
    async execute({}: ListingUsers) {
        return await this.userManager.getUsers()
    }
}
