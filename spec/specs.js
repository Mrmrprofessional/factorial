describe('triangleTracker', function() {

    it("is not a triangle if one side is greater than the sum of the others", function() {
        expect(triangleTracker(5,2,2)).to.equal('not a triangle');
    });

    it("is equilateral for three sides that are all equal", function() {
        expect(triangleTracker(5,5,5)).to.equal('equilateral');
    });

    it("is isosceles for two sides that are equal", function() {
        expect(triangleTracker(5,5,3)).to.equal('isosceles');
    });

    it("is scalene if no sides are equal", function() {
        expect(triangleTracker(5,4,3)).to.equal('scalene');
    })
});
