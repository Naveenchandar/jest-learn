const { additon, subtraction, multiply, divide, oddNumbers } = require(".");


// Numbers
test('Should return 3 on additing 1 and 2', () => {
    const result = additon(1, 2);
    expect(result).toBe(3);
});

test('addition test should fail', () => {
    const result = additon(1, 2);
    expect(result).toBe(10);
});

test('should subtract and return 10 on subtracting 8 and 2', () => {
    const result = subtraction(10, 2);
    expect(result).toBe(10);
});

test('Should subtract and return only positive number', () => {
    const result = subtraction(2, 10);
    expect(result).toBe(10);
});

test('should multiple and return 66 on multiplying two numbers', () => {
    const result = multiply(22, 3);
    const result1 = multiply(1, 66);
    const result2 = multiply(33, 2);
    expect(result).toBe(66);
    expect(result1).toBe(66);
    expect(result2).toBe(66);
});

test('should divide and return 5 on dividing two numbers', () => {
    const result = divide(50, 10);
    expect(result).toBe(5);
});

test('Number should be greater than 5', () => {
    expect(6).toBeGreaterThan(5);
    expect(6).toBeGreaterThan(1); // This will fail
    expect(6).toBeGreaterThan(-100); // This will fail
});

test('Should be greater than or equal to 10', () => {
    expect(10).toBeGreaterThanOrEqual(10);
    expect(10).toBeGreaterThanOrEqual(11);
    expect(10).toBeGreaterThanOrEqual(5); // This will fail
});

test('Number should be lesser than 6', () => {
    expect(6).toBeLessThan(5);
    expect(6).toBeLessThan(11); // This will fail
    expect(6).toBeLessThan(100); // This will fail
});

test('Should be lesser than or equal to 10', () => {
    expect(10).toBeLessThanOrEqual(10);
    expect(10).toBeLessThanOrEqual(1);
    expect(10).toBeLessThanOrEqual(155); // This will fail
});

test('Should subtract and return only positive number', () => {
    const result = subtraction(2, 10);
    expect(result).toBe(10);
    expect(result).not.toBe(-10); // This will fail
});

test('primitive types test', () => {
    expect('1').toBe('1');
    expect(1).toBe(1);
    expect(true).toBe(true);
    expect(null).toBe(null);
    expect(undefined).toBe(undefined);
});

test('non primitive type test', () => {
    expect([]).toEqual([]);
    expect({}).toEqual({});
});

test('primitive types test with toEqual', () => {
    expect('1').toEqual('1');
    expect(1).toEqual(1);
    expect(true).toEqual(true);
    expect(null).toEqual(null);
    expect(undefined).toEqual(undefined);
});

test('non primitive type test with toBe', () => {
    expect([]).toBe([]);
    expect({}).toBe({});
});

test('Numbers test', () => {
    const result = 1 + 2 + 3;
    expect(result).toBe(6);
    expect(result).toEqual(6);
})

describe('String test', () => {
    it('Ckeck regex contains string', () => {
        expect('hello world').toMatch(/w/);
    });
});

it('toEqual and toStrictEqual check for objects value undefined', () => {
    const a = { a: undefined, b: 2 };
    const b = { b: 2 };
    expect(a).toStrictEqual(b);
    expect(a).toEqual(b);
});

it('toEqual and toStrictEqual check for arrays', () => {
    const a = [1, 2, 3, 4];
    const b = [1, undefined, 3, 4];
    expect(a).toStrictEqual(b); // This will fail
    expect(a).toEqual(b); // This will fail
    expect(a).toEqual([1, 2, 3, 4]);
});

it('toEqual and toStrictEqual check for objects value null', () => {
    const a = { a: null, b: 2 };
    const b = { b: 2 };
    expect(a).toStrictEqual(b); // This will fail
    expect(a).toEqual(b);
});



// Truthy values

it('checks for null', () => {
    const result = null;
    expect(result).toBeNull();
    expect(result).toBe(null);
    expect(result).toEqual(null);
});

it('checks for undefined', () => {
    const result = undefined;
    expect(result).toBeUndefined();
    expect(result).toBe(undefined);
    expect(result).toEqual(undefined);
});

it('checks for defined. ', () => {
    const result = 1;
    expect(result).toBeNull(); // This will fail
    expect(result).toBeUndefined(); // This will fail
    expect(result).toBeDefined();
    expect(result).toBe(undefined); // This will fail
    expect(result).toEqual(undefined); // This will fail
});

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined(); // This will fail
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

describe('Array test', () => {
    test('toContainEqual and toContain', () => {
        const state = [
            { type: 'START', data: 'foo' },
            { type: 'START', data: 'baz' },
            { type: 'END', data: 'foo' },
        ]
        expect(oddNumbers()).toContainEqual(7);
        expect(oddNumbers()).toContain(7);
        expect(state).toContainEqual({ type: 'START', data: 'foo' })
    });

    test('To check array length', () => {
        expect(oddNumbers()).toHaveLength(24);
    })

    test('To check property exist in array', () => {
        const oddArray = [1, 3, 5, 7, 9, 11, 13];
        expect(oddArray).toEqual(expect.arrayContaining([1, 3, 5, 7, 9]));
        // array containing is equal to toContain. Instead of checking each values using toContain. we can use arrayContaining to check in single line
        expect(oddArray).toContain(1);
        expect(oddArray).toContain(3);
        expect(oddArray).toContain(5);
        expect(oddArray).toContain(7);
        expect(oddArray).toContain(9);
    })
});

describe('Object test', () => {
    test('check object has correct key', () => {
        expect({ a: 1 }).toHaveProperty('a');
    });
    test('check object has same key and value',() => {
        expect({ a: 1 }).toHaveProperty('a', 1);
    });
    expect({ a: { b: 1 } }).toHaveProperty('a.b');
    test('check object has another object with exact structure', () => {
        expect({ a: 1, b: 2 }).toMatchObject({ a: 1 });
        expect({ a: 1, b: 2 }).toMatchObject({
            a: expect.any(Number),
            b: expect.any(Number),
        });
    })
    expect([{ a: 1 }, { b: 2 }]).toEqual([
        expect.objectContaining({ a: 1 }),
        expect.anything(),
    ]);
})