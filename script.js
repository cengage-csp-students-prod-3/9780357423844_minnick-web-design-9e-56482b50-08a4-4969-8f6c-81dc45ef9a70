/*
	Student Name: Hannah Whisenant
	File Name: script.js
	Date: 11/14/2025
*/

//Global variables
var video = document.getElementById("example");
var videoSource = document.getElementById("example");
var descriptionSource = document.getElementById("despsrc");

//Hamburger menu function
function hamburger() {
	var menu = document.getElementById("menu-links");
	var logo = document.getElementById("fcc-logo");
	if (menu.style.display === "block" && logo.style.display === "none") {
		menu.style.display = "none";
		logo.style.display = "block";
	} else {
		menu.style.display = "block";
		logo.style.display = "none";
	}
}