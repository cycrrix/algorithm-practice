var copyRandomList = function (head) {
  if (head === null) {
    return null
  }
  let curr = head;
  while (curr!==null) {
    const newNode = new Node(curr.val);
    newNode.next=curr.next;
    curr.next = newNode;
    curr=newNode.next;
  }
  curr =head;
  while (curr!==null) {
    if (curr.random!==null) {
      curr.next.random=curr.random.next;
    }
    curr=curr.next.next;
  }
  curr=head;
  const copyHead = new Node(0);
  let copyCurr=copyHead;
  while (curr!==null) {
    copyCurr.next = curr.next;
    copyCurr = copyCurr.next;
    
    curr.next = curr.next.next;
    
    curr = curr.next;
  }
  return copyHead.next;
};
