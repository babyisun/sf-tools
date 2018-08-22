sf-tools 常用函数库
============================
A common function package.

#### 文档

<!-- vim-markdown-toc GFM -->

* [Array](#array)
  * [Array-Clone](#array-clone)
  * [求最大值 max](#array-max)
  * [求最小值 min](#array-min)
  * [数组求和 sum](#array-sum)
* [cookie操作](#cookie)
* [storage操作](#storage)

<!-- vim-markdown-toc -->

## Array

### Array Clone
待补充

### Array Max
函数式调用方式一
```
 let arr = [1,2,3,4];
 Max(arr)();
```
函数式调用方式二
```
 let arr = [{ name: "north", age: 2 }, { age: 4 }, { age: 3 }];
 Max(arr)("age");
```
函数式调用方式三
```
 let arr = [{ name: "north", age: 2 }, { age: 4 }, { age: 3 }];
 Max(arr)(r=>r.age);
```
| 参数 | 类型 | 说明 |
|----------|----------|----------|
| arr  | Array | 第一层函数参数，传入待计算数组 |
| name/lambda/空缺  | String/Lambda/空  | 第二层函数参数，可传入待计算属性名/lambda表达式/数值型数组可以空缺 |

### Array Min
函数式调用方式一
```
 let arr = [1,2,3,4];
 Min(arr)();
```
函数式调用方式二
```
 let arr = [{ name: "north", age: 2 }, { age: 4 }, { age: 3 }];
 Min(arr)("age");
```
函数式调用方式三
```
 let arr = [{ name: "north", age: 2 }, { age: 4 }, { age: 3 }];
 Min(arr)(r=>r.age);
```
| 参数 | 类型 | 说明 |
|----------|----------|----------|
|  arr  |  Array  | 第一层函数参数，传入待计算数组 |
| name/lambda/空缺  | String/Lambda/空  | 第二层函数参数，可传入待计算属性名/lambda表达式/数值型数组可以空缺 |
