/* VANILLA JS */
/* for (var i = 0; i < 5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector("h1").style.color = "purple";
    });
} */

/* jQUERY JS */
/* $("button").click(function() {
    $("h1").css("color", "purple");
}); */

/* CODE CHALLENGE */
$(document).keypress(function(event) {
    $("h1").text(event.key);
})
