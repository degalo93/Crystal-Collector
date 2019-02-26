var comtarget = 52;

$("#comtarget-text").text(comtarget);

var num = 0;

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
    $("#num").html(num);
    if (num === comtarget) {
        alert("You have won!!");
    } else if (num >= comtarget) {
        alert("You have lost ");
    }
});

/* , "assets/images/acespade.jpg", "assets/images/hearts.jpg", "assets/images/diamond.jpg" */