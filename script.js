$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    var classes = ["col-sm-1", "col-sm-3", "col-sm-9"];
    var delay = 100;
    $(".card1").on('click', function (event) {
        if ($(".card1").attr("class").includes("col-sm-9")) {
            $(".card1").removeClass(classes).addClass("col-sm-3");
            $(".card2").removeClass(classes).addClass("col-sm-3");
            $(".card3").removeClass(classes).addClass("col-sm-3");
            $(".card4").removeClass(classes).addClass("col-sm-3");
            $(".card1").children("p").hide(delay);
        } else {
            $(".card1").removeClass(classes).addClass("col-sm-9");
            $(".card2").removeClass(classes).addClass("col-sm-1");
            $(".card3").removeClass(classes).addClass("col-sm-1");
            $(".card4").removeClass(classes).addClass("col-sm-1");
            $(".card1").children("p").show(delay);
            $(".card2").children("p").hide(delay);
            $(".card3").children("p").hide(delay);
            $(".card4").children("p").hide(delay);
        }

    });
    $(".card2").on('click', function (event) {
        if ($(".card2").attr("class").includes("col-sm-9")) {
            $(".card1").removeClass(classes).addClass("col-sm-3");
            $(".card2").removeClass(classes).addClass("col-sm-3");
            $(".card3").removeClass(classes).addClass("col-sm-3");
            $(".card4").removeClass(classes).addClass("col-sm-3");
            $(".card2").children("p").hide(delay);
        } else {
            $(".card2").removeClass(classes).addClass("col-sm-9");
            $(".card1").removeClass(classes).addClass("col-sm-1");
            $(".card3").removeClass(classes).addClass("col-sm-1");
            $(".card4").removeClass(classes).addClass("col-sm-1");
            $(".card2").children("p").show(delay);
            $(".card1").children("p").hide(delay);
            $(".card3").children("p").hide(delay);
            $(".card4").children("p").hide(delay);
        }
    });
    $(".card3").on('click', function (event) {
        if ($(".card3").attr("class").includes("col-sm-9")) {
            $(".card1").removeClass(classes).addClass("col-sm-3");
            $(".card2").removeClass(classes).addClass("col-sm-3");
            $(".card3").removeClass(classes).addClass("col-sm-3");
            $(".card4").removeClass(classes).addClass("col-sm-3");
            $(".card3").children("p").hide(delay);
        } else {
            $(".card3").removeClass(classes).addClass("col-sm-9");
            $(".card2").removeClass(classes).addClass("col-sm-1");
            $(".card1").removeClass(classes).addClass("col-sm-1");
            $(".card4").removeClass(classes).addClass("col-sm-1");
            $(".card3").children("p").show(delay);
            $(".card2").children("p").hide(delay);
            $(".card1").children("p").hide(delay);
            $(".card4").children("p").hide(delay);
        }
    });
    $(".card4").on('click', function (event) {
        if ($(".card4").attr("class").includes("col-sm-9")) {
            $(".card1").removeClass(classes).addClass("col-sm-3");
            $(".card2").removeClass(classes).addClass("col-sm-3");
            $(".card3").removeClass(classes).addClass("col-sm-3");
            $(".card4").removeClass(classes).addClass("col-sm-3");
            $(".card4").children("p").hide(delay);
        } else {
            $(".card4").removeClass(classes).addClass("col-sm-9");
            $(".card2").removeClass(classes).addClass("col-sm-1");
            $(".card3").removeClass(classes).addClass("col-sm-1");
            $(".card1").removeClass(classes).addClass("col-sm-1");
            $(".card4").children("p").show(delay);
            $(".card2").children("p").hide(delay);
            $(".card3").children("p").hide(delay);
            $(".card1").children("p").hide(delay);
        }
    });
});