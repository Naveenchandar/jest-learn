const { getPromiseRejecteddData, getPromiseResolvedData, asyncAwaitLoad, asyncAwaitLoadReject } = require('./async');

describe('Test async functions as promises', () => {
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
});

describe('Test async functions as async/await', () => {
    // two methods to test async/await calls.
    // FIRST: wait for function execution. 
            // If in returns data from try block use toBe or toEqual based on data type.
    // SECOND: don't await the function execution. It should return promise and wait for expect.
            // If in returns data from try block use resolves.
    // If in returns data from catch block use rejects.
    // In catch block if nothing is thrown, don't use toThrow.
    test('await data resolved', async () => {
        // const data = await asyncAwaitLoad(4);
        // expect(data).toBe(1);
        // OR 
        await expect(asyncAwaitLoad()).resolves.toBe(1);
    })

    // if catch block returns error or thrown error only then can able to verify using rejects.
    // if console is printed in catch block, cannot be tested 
    test('await data rejected', async () => {
        await expect(asyncAwaitLoadReject()).rejects.toThrow('failed');
    })
})