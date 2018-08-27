import { Debounce } from '../../src'

jest.useFakeTimers()
it('执行 debounce 10次 1s 后 callback 只被调用一次', () => {
    const callback = jest.fn(),
          debounceCallback =  Debounce(callback, 1000);
    
    for(let i = 0; i < 10; i++) debounceCallback();
    expect(callback).not.toBeCalled();
    jest.runAllTimers();
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
  