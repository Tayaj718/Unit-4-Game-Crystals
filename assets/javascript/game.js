$(document).ready(function() {
    //INSERT NUMBER ARRAYS
    //MAKE IT RANDOM

    var randNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);

    $('#randNum').html(randNumber);


    //each gemstone has a hidden value

    var amethyst = Math.floor(Math.random() * 12) + 1;
    var emerald = Math.floor(Math.random() * 12) + 1;
    var ruby = Math.floor(Math.random() * 12) + 1;
    var diamond = Math.floor(Math.random() * 12) + 1;

    //player clicks the jewel to display value's total score

    var wins = 0;
    var losses = 0;

    var totalScore = 0;
    $('#totalScore').text(totalScore);

    //IDK HOW TO CONSOLE LOG

    //INSERT FUNCTION FOR WIN
    function win() {
        wins = wins + 1;
        $('#wins').text(wins);
        resetTwo();
        reset();
    }
    //INSERT FUNCTION FOR LOSE
    function lose() {
        losses = losses +1;
        $('#losses').text(losses);
        resetTwo();
        reset();
    }

    $('#amethyst').click(() => {
        totalScore = totalScore + amethyst
        $('#totalScore').text(totalScore);
        if (totalScore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totalScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#emerald').click(() => {
        totalScore = totalScore + emerald;
        $('#totalScore').text(totalScore);
        if (totalScore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totalScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#ruby').click(() => {
        totalScore = totalScore + ruby;
        $('#totalScore').text(totalScore);
        if (totalScore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totalScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#diamond').click(() => {
        totalScore = totalScore + diamond;
        $('#totalScore').text(totalScore);
        if (totalScore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totalScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    //GAME RESET
    function reset() {
        totalScore = 0;
        $('#totalScore').text(totalScore);
    }

    function resetTwo() {
        randNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
        $('#randNum').html(randNumber);
        amethyst = Math.floor(Math.random() * 12) + 1;
        emerald = Math.floor(Math.random() * 12) + 1;
        ruby = Math.floor(Math.random() * 12) + 1;
        diamond = Math.floor(Math.random() * 12) + 1;
    }
});
