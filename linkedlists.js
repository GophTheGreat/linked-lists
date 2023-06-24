class LinkedList{
  constructor(rootvalue){
    this.root = new MyNode(rootvalue);
  }

  //adds a new node containing "value" to the end of the list
  append(value){
    let n = new MyNode(value);

    let cur = this.root;
    while(cur.next !== null){
      cur = cur.next;
    }
    cur.next = n;
  }

  //adds a new node containing "value" to the start of the list
  prepend(value){
    let n = new MyNode(value);

    n.next = this.root;
    this.root = n;
  }

  //returns the total number of nodes in the list
  size(){
    let cur = this.root;
    let count = 1;
    while(cur.next !== null){
      count++;
      cur = cur.next;
    }
    console.log("SIZE IS " + count);
    return count;
  }

  //returns the first node
  head(){
    console.log("HEAD IS " + this.root.value);
    return this.root.value;
  }

  //returns the last node
  tail(){
    let cur = this.root;
    while(cur.next !== null){
      cur = cur.next;
    }
    console.log("TAIL IS " + cur.value)
    return cur.value;
  }

  //returns the value at the selected index
  at(index){
    let cur = this.root;
    let curIndex = 0;
    if(index + 1 > this.size || index < 0){
      console.log("Out of bounds")
      return null;
    }

    while(cur.next !== null && curIndex < index){
      curIndex++;
      cur = cur.next;
    }
    console.log("Value: " + cur.value + " At index: " + index);
    return cur.value;
  }

  //removes the last element from the list
  pop(){
    let cur = this.root;
    let curIndex = 0;
    let end = this.size() - 1;
    while(curIndex < end - 1){
      cur = cur.next;
      curIndex++;
    }
    cur.next = null;
  }

  //returns true if the passed in value is in the list and otherwise returns false.
  contains(value){
    console.log("Searching for " + value)
    let cur = this.root;
    while(cur.next !== null){
      if(cur.value === value){
        console.log("TRUE")
        return true;
      }
      cur = cur.next;
    }
    console.log("FALSE")
    return false;
  }

  //returns the index of the node containing value, or null if not found.
  find(value){
    console.log("Searching for " + value)
    let cur = this.root;
    let curIndex = 0;

    while(cur !== null){
      console.log(`Comparing ${cur.value} & ${value}`);
      if(cur.value === value){
        console.log("FOUND IT AT INDEX " + curIndex)
        return curIndex;
      }
      curIndex++;
      cur = cur.next;
    }

    console.log("NOT FOUND")
    return null;
  }

  //prints the LinkedList
  toString(){
    let cur = this.root;
    let output = "( " + cur.value + " ) -> ";

    while(cur.next !== null){
      cur = cur.next;
      output += "( " + cur.value + " ) -> ";
    }
    output += "null";
    console.log(output);
  }

  //inserts a new node with the provided value at the given index
  insertAt(value, index){
    console.log("Inserting '" + value + "' at index " + index)
    let n = new MyNode(value)
    let cur = this.root;
    let curIndex = 0;

    while(curIndex < index - 1){
      cur = cur.next;
      curIndex++;
      if(cur.next === null){
        cur.next = n;
        return;
      }
    }

    n.next = cur.next;
    cur.next = n;
  }

  //removes the node at the given index
  removeAt(index){
    console.log("Removing at index " + index)
    let cur = this.root;
    let prev = cur;
    let curIndex = 0;
    while(curIndex < index - 1){
      cur = cur.next;
      prev = cur;
      curIndex++;
      if(cur === null){
        console.log("Out of bounds")
        return;
      }
    }
    prev.next = cur.next.next;
  }

  traverse(){
    let cur = this.root;
    while(cur.next !== null){
      console.log(cur.value);
      cur = cur.next;
    }
    console.log(cur.value);
  }
}

class MyNode{
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

let x = new LinkedList(50);

console.log("TEST APPEND 123")
x.append("tool");
x.append(123);
x.traverse();
console.log("~~~~~~~~~~~~")

console.log("TEST PREPEND 99999")
x.prepend(99999);
x.traverse();
console.log("~~~~~~~~~~~~")

console.log("TEST SIZE")
x.append(333333);
x.append(7788888);
x.size()
x.traverse();
console.log("~~~~~~~~~~~~")

console.log("TEST HEAD")
x.head();
x.traverse();
console.log("~~~~~~~~~~~~")

console.log("TEST TAIL")
x.tail();
x.traverse();
console.log("~~~~~~~~~~~~")

console.log("TEST at(index)")
x.at(3);
x.traverse();
console.log("~~~~~~~~~~~~")

console.log("TEST POP")
x.pop();
x.traverse();
console.log("~~~~~~~~~~~~")

console.log("TEST contains()")
x.contains("tool")
x.contains("this should be false")
x.contains(123)
x.traverse();
console.log("~~~~~~~~~~~~")

console.log("TEST find(value)")
x.find(333333)
x.find("Don't find this")
x.traverse();
console.log("~~~~~~~~~~~~")

console.log("TEST toString")
x.toString();
x.traverse();
console.log("~~~~~~~~~~~~")

console.log("TEST insertAt(value, index)")
x.insertAt("INSERT ME HERE", 3)
x.insertAt("INSERT PAST THE LIST", 9)
x.traverse();
console.log("~~~~~~~~~~~~")

console.log("TEST removeAt(index)")
x.removeAt(3)
x.removeAt(10)
x.traverse();
console.log("~~~~~~~~~~~~")