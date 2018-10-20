// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .

jQuery(document).ready(function($) {
  $('#carousel-bg-image').carousel({
    interval: 4000,
    pause: "false"
  })

  $('#carousel-profile').carousel('pause');

  var navbarHeightString = $('.navbar').css('height');
  var navbarHeight = parseInt(navbarHeightString.match(/\d+/g).map(Number));
  var bgImageTop = navbarHeight + 100 + 'px';

  $('.background-logo').css('top', bgImageTop);
});
