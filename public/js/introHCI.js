'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	$('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("Starting AJAX operation involving /project/" + idNumber);
	$.get("/project/" + idNumber, handleDetails);

	console.log("User clicked on project " + idNumber);
}

function handleDetails(result) {
	console.log(result);
	var selectorTarget = "div#project" + result['id'] + " div.details";
	console.log(selectorTarget);

	var htmlInsert = '<img class = "detailsImage" src ="' + result['image'] + '" <br><h4>' + result['date'] + '</h4>' + result['summary'] + ''; 

	$(selectorTarget).html(htmlInsert);

	console.log("AJAX op complete!");
}

/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 */
function randomizeColors(e) {
	console.log("User clicked on color button");

	$.get("/palette", handlePalette);
}

function handlePalette(result) {
	console.log("reached palette handler");
	var colors = result['hex'];

	$('body').css('background-color', colors[0]);
	$('.thumbnail').css('background-color', colors[1]);
	$('h1, h2, h3, h4, h5, h5').css('color', colors[2]);
	$('p').css('color', colors[3]);
	$('.project img').css('opacity', .75);	
}