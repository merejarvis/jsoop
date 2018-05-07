const _stack = new WeakMap()

class Stack {
    constructor () {
        _stack.set(this, [])
    }

    add (item) {
        _stack.get(this).push(item)
    }

    remove () {
        _stack.get(this).pop()
    }

    peek () {
        const items = _stack.get(this)
        return items[items.length -1]
    }
    //getter: read only, cannot manipulate array stack
get count () {
        const items = _stack.get(this)
        return items.length
    }
}


let stack1 = new Stack()
stack1.add(1)
stack1.add(1)
stack1.add(1)
stack1.add(5)
stack1.add(2)
stack1.remove()
//this reassigning of count property will not work as we used getter
stack1.count = 3
console.log(stack1.count);
