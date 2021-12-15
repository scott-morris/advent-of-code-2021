class Counter {
  constructor(iterable) {
    this.map =
      iterable instanceof Counter
        ? new Map(Array.from(iterable.map))
        : new Map(iterable);
  }

  clear() {
    return this.map.clear();
  }

  delete(key) {
    return this.map.delete(key);
  }

  entries() {
    return this.map.entries();
  }

  forEach(fn) {
    return this.map.forEach(fn);
  }

  get(key) {
    return this.map.get(key);
  }

  has(key) {
    return this.map.has(key);
  }

  keys() {
    return this.map.keys();
  }

  set(key, value) {
    this.map.set(key, parseInt(value, 10));
  }

  values() {
    return this.map.values();
  }

  increment(key, byHowMuch = 1) {
    if (this.map.has(key)) {
      const currentValue = this.map.get(key);
      this.map.set(key, currentValue + byHowMuch);
    } else {
      this.map.set(key, parseInt(byHowMuch, 10));
    }
  }

  decrement(key, byHowMuch = 1) {
    if (this.map.has(key)) {
      const currentValue = this.map.get(key);
      this.map.set(key, currentValue - byHowMuch);
    } else {
      this.map.set(key, 0 - parseInt(byHowMuch, 10));
    }
  }

  toJSON() {
    return {
      Counter: Array.from(this.map).reduce(
        (obj, [key, value]) => ({ ...obj, [key]: Array.from(value) }),
        {}
      ),
    };
  }
}

module.exports = { Counter };
