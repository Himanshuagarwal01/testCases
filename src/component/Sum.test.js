const sum = require('./Sum');

describe('updated home page ', () => {
    // it('this is my second test casse', () => {
    //     expect(sum(1, 2)).toBe(3)
    // });
    it('this is my second test casse', () => {
        expect(sum(1, 2)).not.toBe(5)
    });

    // it('object check', () => {
    //     let data = sum(1,2);
    //     expect(data).toEqual({name: 'code'})
    // })
})
// test('my first test case', () => {
//     let data = 10;
//     expect(data).toBe(10);
// });