function HtmlElement () {
   this.click = function () {
       console.log('clicked');  
   }
}

HtmlElement.prototype.focus = function () {
    console.log('focused');
}

function HtmlSelectElement (items = []) {
    this.items = items
    this.addItem = function (x) {
        this.items.push(x)
    }
    this.removeItem = function (x) {
        this.items = this.items.filter((elem) => elem !== x )
    }
    this.render = function () {
        let option =''
        this.items.forEach((elem) => {
            option += `\n<option>${elem}</option>`
        })
        return `<select>${option}\n</select>`
    }
}

HtmlSelectElement.prototype = new HtmlElement()
HtmlSelectElement.prototype.constructor = HtmlSelectElement

function HtmlImageElement (src= undefined) {
    this.src = src
    this.render = function () {
        return `<img src="${this.src}" />`
    }
}

HtmlImageElement.prototype = new HtmlElement()
HtmlImageElement.prototype.constructor = HtmlImageElement

const elements = [
    new HtmlSelectElement([1,2,3]),
    new HtmlImageElement('http://')
]

for(let elem of elements) {
    console.log(elem.render());
    
}