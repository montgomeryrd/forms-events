'use strict';

//Variables
var form = document.getElementById('sample_form');
var table = document.getElementById('student_table');
var data = [];

//constructor function for New Students
function Student(first, last, status, plans) {
  this.first = first;
  this.last = last;
  this.enrolled = status;
  this.future_plans = plans;
}

//Stores the form fill
function formData(event) { //event that we will trigger
  event.preventDefault(); //don't refresh form

//event.target = Wherever it's fired from.
//Markup, name="first". .first points to that
  var first = event.target.first.value;
  var last = event.target.last.value;
  var enrolled = event.target.enrolled.checked;
  var futurePlans = event.target.future_plans.value;

  data.push(new Student(first, last, enrolled, futureClasses));
 //call create table here
  form.reset();
}
