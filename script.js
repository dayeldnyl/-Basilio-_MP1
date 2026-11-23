$(document).ready(function () {

  $(".filter-btn").click(function () {
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");

    var selectedCategory = $(this).attr("data-filter");

    if (selectedCategory === "all") {
      $(".product-card").show();
    } else {
      $(".product-card").hide();
      $(".product-card[data-category='" + selectedCategory + "']").show();
    }
  });

  var bagCount = 0;
  var bagTotal = 0;

  $(".add-btn").click(function () {
    var price = parseInt($(this).attr("data-price"));
    bagCount = bagCount + 1;
    bagTotal = bagTotal + price;

    $("#bag-count").text(bagCount);
    $("#bag-total").text("₱" + bagTotal);
    $(this).text("Added!");
  });

  $("#clear-bag-btn").click(function () {
    bagCount = 0;
    bagTotal = 0;

    $("#bag-count").text("0");
    $("#bag-total").text("₱0");
    $(".add-btn").text("Add to Bag");
  });

  $(".gallery-item img").click(function () {
    var imgSrc = $(this).attr("src");
    var imgAlt = $(this).attr("alt");
    var captionText = $(this).next("figcaption").text();

    $("#lightbox-img").attr("src", imgSrc);
    $("#lightbox-img").attr("alt", imgAlt);
    $("#lightbox-caption").text(captionText);
    $("#lightbox").addClass("open");
  });

  $("#lightbox-close").click(function () {
    $("#lightbox").removeClass("open");
  });

  $("#lightbox").click(function (event) {
    if (event.target.id === "lightbox") {
      $("#lightbox").removeClass("open");
    }
  });

  $("#contact-form").submit(function (event) {
    event.preventDefault();

    var fullName = $("#full-name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    $("#form-status").removeClass("error success");

    if (fullName === "" || email === "" || message === "") {
      $("#form-status").text("Please fill out your name, email, and message.");
      $("#form-status").addClass("error");
    } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
      $("#form-status").text("Please enter a valid email address.");
      $("#form-status").addClass("error");
    } else {
      $("#form-status").text("Thank you, " + fullName + "! Your inquiry has been received.");
      $("#form-status").addClass("success");
      $("#full-name").val("");
      $("#email").val("");
      $("#message").val("");
    }
  });

});