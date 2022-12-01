const { getPromiseRejecteddData, getPromiseResolvedData } = require('./async');

describe('Test async functions', () => {
    test('get data promise resolved', () => {
        const data = getPromiseResolvedData().then(response => {
            expect(response).toBe(1);
        });
    })

    // for promise rejection, we need to pass function as parameter in expect.
    // promise rejection will be always inside .then and not on .catch block.
    // if we are throwing error in promise rejection, we have to use .toThrow or else use .toBe
    // rejects is used for .catch  
    test('get data promise rejected', () => {
        expect(() => getPromiseRejecteddData().then(err => {
            return err.message
        })).rejects.toThrow('failed');
    })
})