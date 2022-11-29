const { additon, subtraction, multiply, divide } = require(".");


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