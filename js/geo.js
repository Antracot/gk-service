// JavaScript Document
$(document).ready(function()
{
	alert('!');
	alert(ymaps.geolocation.city);
	$('.cityname').text(ymaps.geolocation.city);
});