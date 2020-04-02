import { describe, it } from "mocha"
import { expect } from "chai"

describe("an example", () => {
    it("should pass", (done) => {
        expect(1).eq(1)
        done()
    })
})