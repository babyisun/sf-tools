import {Sum} from '../../src';

it('数组整数求和', () => {
    let a = [3, 4, 5];
    expect(Sum(a)()).toBe(12);
});

it('数组对象求和', () => {
    let arr = [{ name: "north", age: 2 }, { age: 4.54 }, { age: "3" }];
    let result = Sum(arr)("age");
    expect(result).toBe(9.54);
});