import data from ''
import { getFileLines } from "../../../../src/core/util/data"
describe('data utils test', () => {
    it('should read file and return lines array', () => {
        const lines = getFileLines('__tests__/properties/example.log');
        expect(lines).not.toBe(0)
    })
})