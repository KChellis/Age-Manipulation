import { User } from "./user.js"
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
    let birthday = new Date($("#birthday").val())
  });
});
