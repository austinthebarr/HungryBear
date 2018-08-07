import $ from 'jquery';
import 'bootstrap';
import './../src/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bear } from './../src/hungrybear.js';

$(function(){
  bear.setHunger();
  setInterval(function(){
    $(".foodLevel").text(bear.foodLevel);
    if(bear.foodLevel == 0){
      $(".alive").hide();
      $(".dead").show();
    }
  }, 1000);

  $(".feed").click(function(){
    bear.eatSmall();
    $(".test").text(bear.eatSmall("blueberries"));
  });

  $(".feedPizza").click(function(){
    bear.eatYuck();
    $(".test").text(bear.eatYuck("pizza"));  
  });
  
  $(".restart").click(function(){
    bear.foodLevel = 10;
    $(".alive").show();
    $(".dead").hide();
    bear.setHunger();
    setInterval(function(){
      $(".foodLevel").text(bear.foodLevel);
      if(bear.foodLevel == 0){
        $(".alive").hide();
        $(".dead").show();
      }
    }, 1000);
  });
 
});