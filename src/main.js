import $ from 'jquery';
import 'bootstrap';
import './../src/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  bear
} from './../src/hungrybear.js';

$(function () {
  bear.setHunger();
  setInterval(function () {
    $(".foodLevel").text(bear.foodLevel);
    if (bear.foodLevel == 0) {
      $(".alive").hide();
      $(".dead").show();
    }
  }, 1000);

  $(".feed").click(function () {
    bear.eatSmall();
    $(".test").text(bear.eatSmall("blueberries"));
  });

  $(".feedPizza").click(function () {
    bear.eatYuck();
    $(".test").text(bear.eatYuck("pizza"));
  });

  $(".restart").click(function () {
    bear.foodLevel = 10;
    $(".alive").show();
    $(".dead").hide();
    bear.setHunger();
    setInterval(function () {
      $(".foodLevel").text(bear.foodLevel);
      if (bear.foodLevel == 0) {
        $(".alive").hide();
        $(".dead").show();
      }
    }, 1000);
  });

  $('#giphy').click(function () {
    let gif = $('.gif').val();
    $('#giph').val("");

    let promise = new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=${gif}&limit=25&offset=0&rating=G&lang=en`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function (response) {
      const body = JSON.parse(response);
      $('.gifSpot').append(`<img src ="${body.data[0].images.original.url}"/>`);
    }, function (error) {
      $('.gifSpot').text(`ERROR!`);

    });
  });
});