$(document).ready(function() {
  var flavors = ["vanilla", "chocolate", "strawberry", "banana", "cookies n creme", "mint chocolate chip"];

  flavors.forEach(function(flavor) {
    $("#flavor").append("<li>" + flavor + "</li>"); // Note: text does not render html (li tags will literally show up). Append will add on through each iteration, but text merely replaces - which is why with .text, our browser displayed "<li>mint chocolate chip</li>"
  });
});
