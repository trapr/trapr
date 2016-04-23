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
//= require jquery_ujs
//= require turbolinks
//= require_tree .

alert('hello world');

$(document).ready(function() {
	var traps = $('#traps').data('traps');
	  var myLatLng = {lat: -25.363, lng: 131.044};
	  var myLatLng2 = {lat: 25.360, lng: 131.046}

	  var map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 4,
	    center: myLatLng2
	  });
for (var i = 0; i < traps.length; i++) {
		console.log(traps[i].lat);
		new google.maps.Marker({
			position: {lat: traps[i].lat, lng: traps[i].long},
			map: map,
			title: "It Works!"
		})
		}
	  // var marker = new google.maps.Marker({
	  //   position: myLatLng,
	  //   map: map,
	  //   title: 'Hello World!'
	  // });

	  // var newMarker = new google.maps.Marker({
	  // 	position: myLatLng2,
	  // 	map: map,
	  // 	title: 'Hello Again'
	  // })
});

// var traps = $('#traps').data('traps');
	
// for (var i = 0; i < traps.length; i++) {
// 	console.log(traps[i].lat);
// }

// function initMap() {
//   var myLatLng = {lat: -25.363, lng: 131.044};
//   var myLatLng2 = {lat: 25.360, lng: 131.046}

//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: myLatLng2
//   });

//   var marker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     title: 'Hello World!'
//   });

//   var newMarker = new google.maps.Marker({
//   	position: myLatLng2,
//   	map: map,
//   	title: 'Hello Again'
//   })
// }