import { delay } from "@/utils/asyncio"

describe(`跟 asyncio 相關的整合測試`, () => {
    test(`要能夠藉由 delay 延遲函數的運行`, async () => {
        const milis = 1000
        await expect(delay(milis)).resolves.not.toThrow()
        console.log("done!")
    })
})
