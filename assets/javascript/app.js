var numberOne;
var numberTwo;
var numberThree;

function reset() {
    $("input[name=inlineRadioOptions]").each(function() {
        var el = $(this);
        el.prop('checked', false);
    });
}

function updateStats() {
    $("input[name=inlineRadioOptions]").each(function() {
        var el = $(this);
        if (el.prop('checked') == true) {
            if (el.val() == "ans") {
                numberOne++;
                $("#number1").html(numberOne);
                numberThree--;
                $("#number3").html(numberThree);
            }
            else if (el.val() == "inc") {
                numberTwo++;
                $("#number2").html(numberTwo);
                numberThree--;
                $("#number3").html(numberThree);
            }
        }
    });
}

$(document).ready(function() {
    var interval;

    $("#game").hide()
    $("#stats").hide();
    $("#done").hide();

    $("#start").click(function() {
        numberOne = 0;
        $("#number1").html(numberOne);
        numberTwo = 0;
        $("#number2").html(numberTwo);
        numberThree = 8;
        $("#number3").html(numberThree);
        reset();
        $("#done").show();
        $("#start").hide();
        $("#stats").hide();
        $("#game").show();

        var counter = 60;                
        $("#countdown").text(counter);
        interval = setInterval(function() {
            counter--;
            $("#countdown").text(counter);
            if (counter == 0) {
                clearInterval(interval);
                $("#game").hide();
                $("#done").hide();
                $("#start").show();
                $("#stats").show();
                updateStats();
            } else {
                return;
            }
        }, 1000);
        
    });

    $("#done").click(function() {
        $("#game").hide();
        $("#done").hide();
        $("#start").show();
        $("#stats").show();
        clearInterval(interval);
        updateStats();
    });
});
