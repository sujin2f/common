// yarn test path.spec.ts

const component = require('./path.ts')

jest.mock('fs', () => ({
    readFileSync: () =>
        JSON.stringify({ entrypoints: ['static/js/bundle.js'] }),
}))

describe('path.ts', () => {
    afterAll(() => {
        jest.clearAllMocks()
    })

    it('publicDir', () => {
        expect(component.publicDir.indexOf('public')).not.toBe(-1)
    })

    it('baseDir', () => {
        expect(component.baseDir.indexOf('.build')).not.toBe(-1)
    })

    it('bundles', () => {
        expect(component.bundles()).toEqual({
            entrypoints: ['static/js/bundle.js'],
        })
    })
})
