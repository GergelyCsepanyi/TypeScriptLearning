"use strict";
class RoundHole {
    constructor(radius) {
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    fits(peg) {
        return peg.getRadius() <= this.radius;
    }
}
class RoundPeg {
    constructor(radius) {
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
}
class SquarePeg {
    constructor(width) {
        this.width = width;
    }
    getWidth() {
        return this.width;
    }
}
class SquarePegAdapter extends RoundPeg {
    constructor(peg) {
        super(0); // I think this is not a good way, but we can't access 'this'. Maybe 'super((peg.getWidth() * Math.sqrt(2)) / 2)' would be better, but it is copy-paste.
        this.peg = peg;
    }
    getRadius() {
        return (this.peg.getWidth() * Math.sqrt(2)) / 2;
    }
}
const hole = new RoundHole(5);
const roundPeg = new RoundPeg(5);
console.log(hole.fits(roundPeg)); // true
const smallSquarePeg = new SquarePeg(5);
const largeSquarePeg = new SquarePeg(10);
//console.log(hole.fits(smallSquarePeg)); // won't compile
const smallSquarePegAdapter = new SquarePegAdapter(smallSquarePeg);
const largeSquarePegAdapter = new SquarePegAdapter(largeSquarePeg);
console.log(hole.fits(smallSquarePegAdapter)); // true
console.log(hole.fits(largeSquarePegAdapter)); // false
