describe('factorial', function() {

    it('is 1 if the number is 0', function() {
        expect(factorial(0)).to.equal(1);
    });

    it('is 3 if number is 6', function() {
        expect(factorial(3)).to.equal(6);
    });
});
