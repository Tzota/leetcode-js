import {ListNode} from '~/domain/structures/ListNode';

export function deleteDuplicates(head: ListNode): ListNode {
    if (!head) return head;

    const answer = head;
    let l = head;
    let p = head;

    while (p.next) {
        p = p.next;
        if (l.val !== p.val) {
            l.next = p;
            l = p;
        }
    }
    l.next = null;

    return answer;
}
