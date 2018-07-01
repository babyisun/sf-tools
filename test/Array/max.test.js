import { Max } from '../../';

it('数组整数取最大', () => {
    let a = [3, 4, 5];
    expect(Max(a)()).toBe(5);
});

it('数组对象按照age取最大的子对象', () => {
    let arr = [{ name: "north", age: 22 }, { age: 4 }, { age: 3 }];
    let result = Max(arr)("age");
    expect(result).toBe(arr[0]);
});