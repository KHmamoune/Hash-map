import { linkedList, node } from "./linked-list.js"

class HashMap {
  constructor() {
    this.buckets = []
    this.capacity = 16
  }

  hash(key) {
    let hashCode = 0
    const primeNum = 13

    for (let i = 0; i < key.length; i++) {
      hashCode = primeNum * hashCode + key.charCodeAt(i)
    }

    return hashCode
  }

  set(k, v) {
    const hashCode = this.hash(k)
    const index = hashCode % this.capacity
    let node = new pair()

    node.key = k
    node.value = v

    if (this.buckets[index] == undefined) {
      let list = new linkedList()
      list.append(node)
      this.buckets[index] = list

      return
    }

    this.buckets[index].append(node)
  }

  get(k) {
    const index = this.hash(k) % this.capacity

    if(this.buckets[index] == undefined){
      return null
    }

    const bucket = this.buckets[index]

    for (let j = 0; j < bucket.size(); j++) {
      if (this.hash(bucket.at(j).value.key) == this.hash(k)) {
        return bucket.at(j).value.value
      }
    }

    return null
  }

  has(k) {
    const index = this.hash(k) % this.capacity
    if(this.buckets[index] == undefined){
      return false
    }

    const bucket = this.buckets[index]

    for (let j = 0; j < bucket.size(); j++) {
      if (this.hash(bucket.at(j).value.key) == this.hash(k)) {
        return true
      }
    }

    return false
  }

  remove(k) {
    if(this.has(k)) {
      const index = this.hash(k) % this.capacity
      const bucket = this.buckets[index]

      for (let j = 0; j < bucket.size(); j++) {
        if (this.hash(bucket.at(j).value.key) == this.hash(k)) {
          bucket.removeAt(j)
          return true
        }
      }
    }

    return this.has(k)
  }

  length() {
    let sum = 0

    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] != undefined) {
        let bucket = this.buckets[i]

        if(bucket.getHead().value == null) {
          continue
        }

        for (let j = 0; j < bucket.size(); j++) {
          sum++
        }
      }
    }

    return sum
  }

  clear() {
    this.buckets = []
  }

  iterateArr(cb) {
    let arr = []
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] != undefined) {
        let bucket = this.buckets[i]

        if(bucket.getHead().value == null) {
          continue
        }

        for (let j = 0; j < bucket.size(); j++) {
          cb(arr, bucket.at(j).value)
        }
      }
    }

    return arr
  }

  keys() {
    return this.iterateArr((arr, bucket) => {
      arr.push(bucket.key)
    })
  }

  values() {
    return this.iterateArr((arr, bucket) => {
      arr.push(bucket.value)
    })
  }

  entries() {
    return this.iterateArr((arr, bucket) => {
      arr.push([bucket.key, bucket.value])
    })
  }

  print() {
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] != undefined) {
        let bucket = this.buckets[i]

        if(bucket.getHead().value == null) {
          continue
        }

        console.log(`buckets[${i}]:`)

        for (let j = 0; j < bucket.size(); j++) {
          console.log(`key = ${bucket.at(j).value.key}, value = ${bucket.at(j).value.value}`)
        }
      }
    }
  }
}

class pair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
}

let hash = new HashMap()
console.log(hash.hash("Bruh"))
hash.set("bruh", "brother")
hash.set("bruhthesecond", "sister")
hash.print()
console.log("bruh: " + hash.get("bruh"))
console.log("bruhthesecond: " + hash.get("bruhthesecond"))
console.log("bruhthethird: " + hash.get("bruhthethird"))
console.log("has('bruh') = " + hash.has("bruh"))
console.log("has('bruhnt') = " + hash.has("bruhnt"))
console.log(hash.keys())
console.log(hash.values())
console.log(hash.entries())
console.log(hash.length())
console.log(hash.remove("bruhthesecond"))
console.log(hash.length())
hash.print()
hash.clear()
hash.print()
console.log(hash.remove("bruhest"))
