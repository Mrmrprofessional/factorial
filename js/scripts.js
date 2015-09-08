var triangleTracker = function(side1, side2, side3) {
    var sides = [side1, side2, side3];
    sides.sort(function(a, b) {return b-a});

    if (sides[0] >= sides[1] + sides[2]) {
        return "Not a triangle, jerk.";
    } else if ((side1 === side2) && (side1 === side3)) {
        return "Equilateral";
    } else if ((side1 === side2) || (side1 === side3) || (side2 === side3)) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
};

$(document).ready(function() {
    $("form#triangle").submit(function(event) {
        
        var side1 = parseInt($("input#side1").val());
        var side2 = parseInt($("input#side2").val());
        var side3 = parseInt($("input#side3").val());

        var result = triangleTracker(side1, side2, side3);

        $(".type").text(result);

        $("#result").show();
        event.preventDefault();
    });
});
