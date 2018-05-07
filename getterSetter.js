function obj () {
    let x = 1
    this.garfish = 3
// can also use this to define enumerability, writability and configurability (deletion)
    Object.defineProperty(this, 'x', {
        get: function () {
            return x
        },
        set: function (value) {
            if (typeof (value) === 'number') {
                x = value
            }
        }
    })
}

let obj1 = new obj ()
obj1.x = 333
obj1.x = 'what'
console.log(obj1.x);



