var getJSON = function (url, callback) {
  var apiJSON = JSON.stringify({
    pagesize: 5,
    bundleqty: 0,
    category: document
      .querySelector(".pdpForm")
      .getElementsByTagName("fieldset")[0]
      .querySelector("#cgid").value, //value missing in tapered trousers but category identified on every other page
    productcode: document
      .querySelector(".product-number")
      .querySelector("[itemprop]").innerHTML, //code should run for any item on the site, dynamically access id product code through dom
    sessionid: "TESTING",
    shopperid: "",
    referrer: window.location.href,
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
    console.log(
      "category",
      document
        .querySelector(".pdpForm")
        .getElementsByTagName("fieldset")[0]
        .querySelector("#cgid").value
    );
    console.log(
      "product",
      document.querySelector(".product-number").querySelector("[itemprop]")
        .innerHTML
    );
    console.log("url", window.location.href);

    if (response.recommendations.length > 0) {
      for (var i = 0; i < response.recommendations.length; i++) {
        response.recommendations[i].image = response.recommendations[
          i
        ].image.replace("//on", "/on");

        const h2 = (document
          .querySelector("#item_page_main")
          .getElementsByTagName("h2")[0].innerText = "YOU MIGHT ALSO LIKE");

        console.log(h2);

        const imglink = (document
          .querySelector("#item_page_main")
          .querySelector(".you-may-also-like-item").href =
          response.recommendations[i].link);

        console.log(i, "imglinks", imglink);

        const imgSrc = (document
          .querySelector(".you-may-also-like-item")
          .getElementsByTagName("img").src = response.recommendations[i].image);

        console.log(i, "imageSrc", imgSrc);

        const imgAlt = (document
          .querySelector(".you-may-also-like-item")
          .getElementsByTagName("img").src = response.recommendations[i].name);

        console.log(i, "image alt", imgAlt);

        const imgTitle = (document
          .querySelector(".you-may-also-like-item")
          .getElementsByTagName("img").src = response.recommendations[i].name);
        console.log(i, "image title", imgTitle);

        const h3 = (document
          .querySelector(".you-may-also-like-item")
          .getElementsByTagName("h3")[0].innerText =
          response.recommendations[i].name);
        console.log(i, "h3", h3);

        const price = (document
          .querySelector(".you-may-also-like-item")
          .getElementsByTagName("span")[0].innerText =
          response.recommendations[i].price);
        console.log(i, "price", price);
      }
    }
  }
);
