export type User = {
    id?: string
    name: string
    email: string
}

export class UserManager {
    async addUser(user: User): Promise<number> {
        return 1
    }
    async getUsers(): Promise<User[]> {
        return [
            {
                id: "1",
                name: "user1",
                email: "user1@example.com",
            },
            {
                id: "2",
                name: "user2",
                email: "user2@example.com",
            },
            {
                id: "3",
                name: "user3",
                email: "user3@example.com",
            },
        ]
    }
    async deleteUser(userId: string): Promise<void> {}
}
