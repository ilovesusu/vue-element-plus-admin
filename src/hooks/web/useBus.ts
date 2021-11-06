// 通过mitt实现vue-bus通信
import mitt from 'mitt'

export function useBus() {
  const emitter = mitt()
  return {
    bus: emitter
  }
}
