var factorial = function(number) {
    if (number <= 0) {
        return 1;
    } else {
        var outcome = number*factorial(number-1);
        return outcome;
    }
};

$(document).ready(function() {
    $("form#factorial").submit(function(event) {
        var number = parseInt($("input#number").val());
        var answer = factorial(number);

        $(".answer").text(answer);

        $("#result").show();
        event.preventDefault();
    });
});
