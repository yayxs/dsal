import Compare from './../../utils/comparator/Comparator';
export default class Sort {
  constructor(originCallbacks) {
    this.callbacks = Sort.initSortingCallbacks(originCallbacks);
    this.comparator = new Compare(this.callbacks.compCb);
  }

  static initSortingCallbacks(originCallbacks) {
    const callbacks = originCallbacks || {};

    const stubCallback = () => {};

    callbacks.compCb = callbacks.compCb || undefined;
    callbacks.visitCb = callbacks.visitCb || stubCallback;
    return callbacks;
  }

  sort() {
    throw new Error('sort must be');
  }
}
