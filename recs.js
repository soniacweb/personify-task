var getJSON = function (url, callback) {
  var apiJSON = JSON.stringify({
    pagesize: 3,
    bundleqty: 0,
    category: "smart-trousers",
    productcode: "id",
    sessionid: "TESTING",
    shopperid: "",
    referrer:
      "https://www.mandco.com/women/trousers-and-leggings/smart-trousers/",
  });

  var xhr = new XMLHttpRequest();

  var a;
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      callback(null, xhr.response);
    }
  });

  xhr.open("POST", url, true);
  xhr.responseType = "json";

  xhr.setRequestHeader("content-type", "application/json");
  xhr.send(apiJSON);
};

getJSON(
  "https://cjs2kt2obf.execute-api.eu-west-1.amazonaws.com/mandco-uk-realtime-prod/getrecs",
  function (err, response) {
    console.log("response", response);

    if (response.recommendations.length > 0) {
      htmlText =
        "<div id='more-from-collection-title-wrapper'><h2>YOU MIGHT ALSO LIKE</h2></div>";

      htmlText +=
        "<div id='more-from-collection-content-wrapper' class='more-from-collection-collapse'>" +
        "<a href='#' class='jcarousel-next inactive' data-jcarouselcontrol='true'></a>" +
        "<a href='#' class='jcarousel-prev inactive' data-jcarouselcontrol='true'></a>" +
        "<div class='jcarousel' data-jcarousel='true'>" +
        "<ul id='last-visited-horizontal-carousel' style='left: 0px; top: 0px;'>";

      for (var i = 0; i < response.recommendations.length; i++) {
        response.recommendations[i].image = response.recommendations[
          i
        ].image.replace("//on", "/on");
        htmlText +=
          "<li>" +
          "<div class='product-tile' id='f2126bdf80e2dcfdb9c8454bf6' data-itemid='" +
          response.recommendations[i].productcode +
          "'>	" +
          "<div class='product-image'>" +
          "<a class='thumb-link producttile-tooltip' href='" +
          response.recommendations[i].link +
          "'>" +
          "<img src='" +
          response.recommendations[i].image +
          "' alt='" +
          response.recommendations[i].name +
          "' title='" +
          response.recommendations[i].name +
          "'>" +
          "<div class='tooltip-content' data-layout='product-tooltip'>" +
          "<div class='product-name'>" +
          response.recommendations[i].name +
          "</div>" +
          "</div>" +
          "</a>" +
          "</div>" +
          "</div>" +
          "</li>";
        console.log(htmlText);
      }

      htmlText += "</ul></div></div>";
      document.querySelector("#more-from-collection").innerHTML = htmlText;
    }
  }
);
