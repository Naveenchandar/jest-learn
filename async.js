function getPromiseResolvedData() {
    const result = 1;
    let promise = new Promise((resolve, reject) => {
        if (result === 1) {
            resolve(1);
        }
    });
    return promise;
}

function getPromiseRejecteddData() {
    const result = 1;
    let promise = new Promise((resolve, reject) => {
        if (result === 1) {
            reject(new Error('failed'));
        }
    });
    return promise;
}


async function asyncAwaitLoad() {
    try {
        const data = await getPromiseResolvedData();
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

async function asyncAwaitLoadReject() {
    try {
        const data = await getPromiseRejecteddData();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}
// sample execution of function
// getPromiseResolvedData().then(response => console.log('response', response)).catch(err => console.log('err', err));

module.exports = { getPromiseResolvedData, getPromiseRejecteddData, asyncAwaitLoad, asyncAwaitLoadReject }