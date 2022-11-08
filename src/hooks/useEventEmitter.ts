import { useEffect, useRef } from 'react';

// 定义订阅的事件类型
// eslint-disable-next-line no-unused-vars
type SubScription<T> = (val: T) => void;
class EventEmitter<T> {
  // 定义一个私有属性，用于存储订阅事件
  // set可以保证不会重复订阅重复事件
  private subscriptions = new Map<string, SubScription<T>>();

  // 订阅事件
  useSubScription = (eventName: string, callback: SubScription<T>) => {
    // 使用ref可以保证执行事件时，函数是最新的，
    // useEffect的依赖项为空数组，使用ref,可以保证在useEffect中执行的事件是最新的
    const callbackRef = useRef<SubScription<T>>();
    callbackRef.current = callback;

    useEffect(() => {
      // 增加一层判断，订阅事件的函数存在时，才执行
      function subscription(val: T) {
        if (callbackRef.current) {
          callbackRef.current(val);
        }
      }
      // 订阅事件
      this.subscriptions.set(eventName, subscription);

      // 组件销毁时，删除订阅事件
      return () => {
        this.subscriptions.delete(eventName);
      };
      // 不论组件如何渲染，注册事件，只执行一次
    }, []);
  };

  // 触发事件
  // 注意T
  // 事件的参数类型是T，与useSubScription订阅的函数的参数eventName一致
  emit = (eventName: string, val: T) => {
    // 遍历事件
    if (this.subscriptions.has(eventName)) {
      let Fun: Function | undefined = this.subscriptions.get(eventName);
      Fun && Fun(val);
    }
  };
}

// 因为EventEmitter是个类，函数组件每次渲染，都会生成一个新的对象，
// 所以需要使用下ref
export default function useEventEmitter<T>() {
  const eventEmitterRef = useRef<EventEmitter<T>>();
  if (!eventEmitterRef.current) {
    eventEmitterRef.current = new EventEmitter();
  }

  return eventEmitterRef.current;
}
