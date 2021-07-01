// Node class for a linked list node
class ListNode {
    constructor(value = null) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Generate a linked list from an array
  function generateList(arr) {
    if (arr.length === 0) { return null; }
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
    return head;
  }
  
  let headNode = generateList([1,5,7,10])
  console.log(headNode)
  
  function reverse(node) {
    if(node === null) {return node;}
    
    let current = node
    let prev = null
    let temp
    
    while (current !== null) {
      temp = current.next
      current.next = prev
      prev = current
      current = temp
    }
    return prev
  }
  
  console.log(reverse(headNode))