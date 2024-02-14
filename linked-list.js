export class linkedList {
  constructor() {
    this.head = new node()
  }

  append(v) {
    if (this.head.value == null) {
      this.head.value = v
      return
    }

    let newNode = new node()
    newNode.value = v

    let currNode = this.head
    while (currNode.next != null) {
      currNode = currNode.next
    }

    currNode.next = newNode

  }

  prepend(v) {
    if (this.head.value == null) {
      this.head.value = v
      return
    }

    let newNode = new node()
    newNode.value = v

    let currNode = this.head
    this.head = newNode
    newNode.next = currNode

  }

  size() {
    if (this.head.value == null) {
      return 0;
    }

    let sum = 1
    let currNode = this.head

    while (currNode.next != null) {
      sum += 1
      currNode = currNode.next

    }

    return sum
  }

  getHead() {
    return this.head
  }

  getTail() {
    let currNode = this.head

    while (currNode.next != null) {
      currNode = currNode.next
    }

    return currNode
  }

  at(index) {
    if (index >= this.size()) {
      return "index is outside list range"
    }

    let currNode = this.head
    let i = 0

    while (i < index) {
      currNode = currNode.next
      i++
    }

    return currNode
  }

  pop() {
    let currNode = this.head

    while (currNode.next.next != null) {
      currNode = currNode.next
    }

    currNode.next = null
  }

  contains(v) {
    let currNode = this.head

    if (currNode.value == v) {
      return true
    }

    while (currNode.next != null) {
      currNode = currNode.next

      if (currNode.value == v) {
        return true
      }
    }

    return false
  }

  find(v) {
    let currNode = this.head
    let i = 0

    if (currNode.value == v) {
      return i
    }

    while (currNode.next != null) {
      currNode = currNode.next
      i++

      if (currNode.value == v) {
        return i
      }
    }

    return false
  }

  toString() {
    let currNode = this.head
    let str = ""

    if (currNode.value == null) {
      str += "null"

    } else if (currNode.next == null) {
      str += "( " + currNode.value + " ) -> null"

    } else {
      str += "( " + currNode.value + " )"

    }

    while (currNode.next != null) {
      currNode = currNode.next

      if (currNode.next == null) {
        str += " -> ( " + currNode.value + " ) -> null"

      } else {
        str += " -> ( " + currNode.value + " )"

      }
    }

    console.log(str)
  }

  invertAt(v, index) {
    let currNode = this.head
    let i = 0

    if (i == index) {
      currNode.value = v
    }

    while (currNode.next != null) {
      currNode = currNode.next
      i++

      if (i == index) {
        currNode.value = v
      }
    }

    return false
  }

  removeAt(index) {
    let currNode = this.head
    let i = 0

    if (i == index) {
      if(this.head.next == null){
        this.head.value = null
        return
      }

      this.head = currNode.next
    }

    while (currNode.next != null) {
      currNode = currNode.next
      i++

      if (i == index - 1) {
        currNode.next = currNode.next.next
      }
    }

    return false
  }

}

export class node {
  constructor() {
    this.value = null
    this.next = null
  }
}
