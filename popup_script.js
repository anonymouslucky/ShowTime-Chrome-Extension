var timeId="time";
var dateId = "date";
var days = ["Mon","Tues","Wed","Thus","Fri","Sat","Sun"];
var months = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
var console_greeting = "Hello from popup_script.js ";


function setTimeAndDate(timeElement,dateElement){
	var date = new Date();
	var minutes = (date.getMinutes()>10?'':'0')+date.getMinutes();
	var time = date.getHours()+":"+minutes;
	var d = days[date.getDay()]+","+months[date.getMonth()]+" "+date.getDate()+" "+date.getFullYear();
	timeElement.innerHTML = time;
	dateElement.innerHTML = d;
}

console.log(console_greeting);

document.addEventListener('DOMContentLoaded',function(dcle){
	var timeElement = document.getElementById(timeId);
	var dateElement = document.getElementById(dateId);
	setTimeAndDate(timeElement,dateElement);
});

