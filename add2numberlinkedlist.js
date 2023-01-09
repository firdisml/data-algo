class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2
let list = new LinkedList(node1)

function addTwoNumbers(l1,l2) {
    let sum = 0;
     let current = new ListNode(0);
     let result = current;
     
     while(l1 || l2) {
         
         if(l1) {
             sum += l1.val;
             l1 = l1.next;
         }
         
         if(l2) {
             sum += l2.val;
             l2 = l2.next;
         }
         
         current.next = new ListNode(sum % 10);
         current = current.next;
         
         sum = sum > 9 ? 1 : 0;
     }
     
     if(sum) {
         current.next = new ListNode(sum);
     } 
     return console.log(result.next);

 };
 console.log(list.head.next.data)    
 addTwoNumbers([2,4,3],[5,6,4])