import { Cookie } from '../';

it('写入并读取cookie', () => {
    Cookie.set("test", "abc");
    expect(Cookie.get("test")).toBe("abc");
});

it('删除cookie', () => {
    Cookie.remove("test");
    expect(Cookie.get("test")).toBe("");
});