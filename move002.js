// JavaScript Document
		$(document).ready(function() {
			$(".open-btn").hide();
			$(".btn-select").on("click", function() {
				$(this).next().slideToggle();
				$(this).toggleClass("active");
			});
	});