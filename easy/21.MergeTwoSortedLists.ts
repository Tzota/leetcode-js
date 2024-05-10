import {ListNode} from '~/domain/structures/ListNode';

// export function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//     if (l1 == null) return l2;
//     if (l2 == null) return l1;

//     let current = new ListNode(0);
//     let head = current;

//     while (l1 != null && l2 != null) {
//         if (l1.val < l2.val) {
//             current.next = new ListNode(l1.val);
//             l1 = l1.next;
//         } else {
//             current.next = new ListNode(l2.val);
//             l2 = l2.next;
//         }
//         current = current.next;
//     }

//     if (l1) {
//         current.next = l1;
//     }
//     if (l2) {
//         current.next = l2;
//     }

//     return head.next;
// }

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null) {
    if (!list1 || !list2) {
        return list1 ? list1 : list2;
    }

    if (list1.val > list2.val) {
        [list1, list2] = [list2, list1];
    }

    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
}
