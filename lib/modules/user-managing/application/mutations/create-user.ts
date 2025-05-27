import CallableInstance from "callable-instance"
import { type UserManager } from "@/adapters/mocked/user-manager"

export type CreatingUser = {
    name: string
    email: string
}

export class CreateUser extends CallableInstance<[CreatingUser], Promise<number>> {
    protected userManager: UserManager
    constructor({ userManager }: { userManager: UserManager }) {
        super(`execute`)
        this.userManager = userManager
    }
    async execute({ name, email }: CreatingUser) {
        return await this.userManager.addUser({ name, email })
    }
}
