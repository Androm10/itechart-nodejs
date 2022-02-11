class Shape {
    
    constructor(name) {
        this.name = name;
    }
    
};

class Rectangle extends Shape {

    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }

    get Perimeter() {
        return 2*(this.width + this.height)
    }

    get Area() {
        return this.width*this.height;
    }
}


class Square extends Shape {
    constructor(name, sideLength) {
        super(name);
        this.sideLength = sideLength;
    }

    get Perimeter() {
        return 4*this.sideLength;
    }

    get Area() {
        return this.sideLength*this.sideLength;
    }
}

class ShapesStore extends Array{

    rectanglePerimeter() {
        
        let sum = 0;

        for( let i =0; i<this.length; i++) {
            
            if(this[i] instanceof Rectangle) {
                console.log(this[i].name);
                sum+= this[i].Perimeter;
            }

        }
        return sum;
    }

    squareArea() {
        let sum = 0;

        for( let i =0; i<this.length; i++) {
            
            if(this[i] instanceof Square) {
                sum+= this[i].Area;
            }

        }
        return sum;

    }


}


let rectangle1 = new Rectangle("r1",5,2);
let rectangle2 = new Rectangle("r1",5,6);

let square1 = new Square("s1",4);
let square2 = new Square("s1",6);

let shapesStore = new ShapesStore(rectangle1, rectangle2, square1, square2);

console.log(shapesStore.rectanglePerimeter());