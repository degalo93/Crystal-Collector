$(document).ready(function() {

    //Randomize a number from 20 to 52
    var comtarget = Math.floor((Math.random() * 20) + 42);

    $("#comtarget-text").text(comtarget);

    var num = 0;
    var winsCounter = 0;
    var lossCounter = 0;

    var numberOpt = [8, 2, 3, 7];

    for (var i = 0; i < numberOpt.length; i++) {
        var imageCards = $("<img>");
        imageCards.addClass("cards-images");

        if (i === 0) {
            imageCards.attr("src", "assets/images/clubs.jpg");
        } else if (i === 1) {
            imageCards.attr("src", "assets/images/acespade.jpg");
        } else if (i === 2) {
            imageCards.attr("src", "assets/images/hearts.jpg");
        } else if (i === 3) {
            imageCards.attr("src", "assets/images/diamond.jpg");
        }
        imageCards.attr("data-cardvalue", numberOpt[i]);
        $("#cards").append(imageCards);

    }



    $(".cards-images").on("click", function() {

        var cardValue = ($(this).attr("data-cardvalue"));
        cardValue = parseInt(cardValue);
        num += cardValue;

        $("#num").text("Your Score: " + num);
        if (num === comtarget) {
            $("#win").text("You have won!!");
            winsCounter++;
            $("#totalWins").text("Wins: " + winsCounter);
            num = 0;

        } else if (num >= comtarget) {
            $("#loss").text("You have lost! ");
            lossCounter++;
            $("#totalLoss").text("Losses: " + lossCounter)
            num = 0;
        }



    });
});