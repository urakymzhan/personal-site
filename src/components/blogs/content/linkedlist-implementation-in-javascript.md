![wallpaper](/personal-site/images/blogs/ll.png)

# Implement LinkedList in JavaScript

_January 27, 2022 by Ulan Rakymzhanov_

**LinkedList** is one of the hardest data structures to learn for beginners.

Some languages support but in some languages we have to implement LL class by ourselves.

Implementing LinkedList is not hard in terms of coding but finding patterns to solve questions or implement it can be confusing and against our typical way of thinking.

That is the reason i wanted write this blog about not actual coding but more of a pseudo coding with some graphics.

First and foremost let's create our base **Node** class. Using this class you can make your logic on how to implement LinkedList methods.

## Node class

- Its has `value` and `next` properties

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

General tasks performed in LinkedList: `Insert` and `Delete` (maybe `Reverse`)

**Insert**: addToStart, addToEnd, addAtIndex

**Delete**: remvoveFromStart, remvoveFromEnd, remvoveFromIndex

**General**: getAtIndex, setAtIndex

Now let's also create our LinkedList class

## LinkedList class

- It Has `head`, `tail` and `size` properties

```js
class LinedList {
  constructor(value) {
    const new_node = new Node(value);
    this.head = new_node;
    this.tail = this.head;
    this.size = 1;
  }
  // your method implementations go here
}
```

Since i said i won't be implementing actual code but give a pseudo with graphics.

Lets do that now.

#### Implement `addToEnd` method:

1. Create a new node based on value
2. Check if head is null, if yes assign new node to head and tail
3. Else, assign tail next to new node and move tail pointer to new node.
4. Increase the size of ll
5. return ll

![addToEnd](/personal-site/images/blogs/addToEnd.png)

#### Implement `removeFromEnd` method:

1. Check if head is null, if yes return undefined.
2. Check if only single node exists, if yes point head and tail to null and return true, null, removed node.
3. Decrease the size of ll

![removeFromEnd](/personal-site/images/blogs/removeFromEnd.png)

Then simply test them out:

```js
const ll = new LinedList(1);
ll.addToEnd(2);
ll.addToEnd(3);
ll.removeFromEnd();
console.log(ll);
```

**Note:** For beginners being able to implement these 2 methods in linkedlist will help them to understand in implemenation of other methods such as: `addToBeginning, removeFromBeginning, getAtIndex, setAtIndex, removeAtIndex, reverse` etc.

I strongly advise to do this kind of pseudo coding before writing actual coding part.

Now its your turn to implement rest of the methods in this manner.
