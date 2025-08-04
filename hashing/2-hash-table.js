class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.table = new Array(size);
    this.count = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }

    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index][i][1] = value;
        return;
      }
    }

    this.table[index].push([key, value]);
    this.count++;

    if (this.count / this.size > 0.7) {
      this._resize();
    }
  }

  get(key) {
    const index = this._hash(key);
    const bucket = this.table[index];

    if (!bucket) return undefined;

    for (let [k, v] of bucket) {
      if (k === key) return v;
    }

    return undefined;
  }

  _resize() {
    const newTable = new HashTable(this.size * 2);
    for (let bucket of this.table) {
      if (bucket) {
        for (let [key, value] of bucket) {
          newTable.set(key, value);
        }
      }
    }

    this.size = newTable.size;
    this.table = newTable.table;
    this.count = newTable.count;
  }
}
