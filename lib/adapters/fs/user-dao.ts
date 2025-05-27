import { readFile, writeFile } from "fs/promises"

export type User = {
    id: number
    name: string
    age: number
}

export class UserDao {
    async loadUsersFromFile(path: string) {
        const content = await readFile(path, "utf-8")
        const users = JSON.parse(content) as User[]
        return users
    }
    async saveUsersToFile(path: string, users: User[]) {
        const content = JSON.stringify(users, null, 2)
        await writeFile(path, content)
    }
}
