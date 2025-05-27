import CallableInstance from "callable-instance"
import { UserDao, type User } from "@/adapters/fs/user-dao"
import MinHeap from "heap-js"

export type MergingUsers = {
    inputs: string[]
    output: string
}

export class MergeUsers extends CallableInstance<[MergingUsers], Promise<void>> {
    protected userDao: UserDao
    constructor({ userDao }: { userDao: UserDao }) {
        super(`execute`)
        this.userDao = userDao
    }
    async execute({ inputs, output }: MergingUsers) {
        const heap = new MinHeap<User>((one, another) => one.id - another.id) // 可以交換減數及被減數測試排序是否正常執行
        for (const path of inputs) {
            const users = await this.userDao.loadUsersFromFile(path)
            for (const user of users) heap.push(user)
        }
        await this.userDao.saveUsersToFile(output, heap.toArray())
    }
}
