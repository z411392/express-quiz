import { MergeUsers, type MergingUsers } from "@/modules/user-managing/application/mutations/merge-users"
import { UserDao } from "@/adapters/fs/user-dao"

export const onMergingUsers = async (mutation: MergingUsers) => {
    const handler = new MergeUsers({ userDao: new UserDao() })
    return await handler(mutation)
}
