import { User } from "./user.js";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function() {
  $(".formOne").submit(function(event) {
    event.preventDefault();
    let name = $("#name").val();
    let sex = $("#sex").val();
    let state = $("#state").val().toUpperCase();
    let date = $("#birthday").val().split("-");
    let year = parseInt(date[0]);
    let month = parseInt(date[1]) - 1;
    let day = parseInt(date[2]);
    let birthday = new Date(year, month, day);
    let user = new User(name, birthday, sex, state);
    let seconds = user.getSeconds();
    let planetYrs = user.planetYears();
    let life = user.lifeExpectancy();
    let animals = user.animalLife();
    $(".form").hide();
    $(".results").show();
    $(".name").prepend(name);
    for (var i = 0; i < planetYrs.length; i++) {
      let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];
      $("#planets").append(`<li>On ${planets[i]} you are ${planetYrs[i]} years old.</li>`);
    }
    if (life <= -.5) {
      $("#life").text(`You are already living ${-life} years beyond your life expectancy. Good job!`);
    }else if (-.5 < life < .5) {
      $("#life").text(`You are at your life expectancy. Be careful`);
    }else {
      $("#life").text(`You will live for ${life} more years. Make sure they are good ones!`)
    }
  });
});
