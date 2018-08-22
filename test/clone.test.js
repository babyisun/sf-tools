import { Clone } from '../src';

it('克隆数组', () => {
    let a = [3, {d: 'hh', f: [1, 9, 30, {a: 'ddd'}]}, 5];
    let cloneA = Clone(a);
    expect(JSON.stringify(cloneA)).toBe(JSON.stringify(a));
});

it('克隆对象', () => {
    let obj = {ond: 999, adp: [9, 10]};
    let cloneObj = Clone(obj)
    expect(JSON.stringify(cloneObj)).toBe(JSON.stringify(obj));
});

it('克隆其他', () => {
    let a = 'ttt';
    expect(Clone(a)).toBe(a);
});
