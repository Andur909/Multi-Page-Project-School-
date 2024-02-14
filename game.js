window.addEventListener("load", Starters);
var question = [];
var answers = [];
let answer_num = 0;
var tof_score;
var tof_box;
var score;

///16 Questions In Jeopardy (4 per subject)
var science_questions = [];
var science_answers = [];
var math_questions = [];
var math_answers = [];
var history_questions = [];
var history_answers = [];
var engineering_questions = [];
var engineering_answers = [];
var team1_score;
var team2_score;
var ans_num;
var type;
var team;
var ans_power;
var total_questions;



function Starters()
{
	console.log("I love sudhir, you love Sudhir, WE ALL LOVE SUDHIR")
	
	document.getElementById("div_main").style.display = "block";
	document.getElementById("div_jeopardy").style.display = "none";
	document.getElementById("div_tof").style.display = "none";
	
	document.getElementById("btn_jeopardy").addEventListener("click", Jeopardy_start);
	document.getElementById("btn_ToF").addEventListener("click", ToF);
	document.getElementById("btn_back_main").addEventListener("click", Back_main);
	
	document.getElementById("btn_back").addEventListener("click", back);
	document.getElementById("btn_back2").addEventListener("click", back);
	document.getElementById("btn_next_tof").addEventListener("click", next_tof);
	
	document.getElementById("btn_tof_submit").addEventListener("click", tof_submit);
	
	document.getElementById("btn_next_jeopardy").addEventListener("click", jeopardy_set);
	document.getElementById("btnshowanswer").addEventListener("click", show_ans);
	document.getElementById("btnnextjeo").addEventListener("click", next_jeo);
	
	///Images
	document.getElementById("science_100").addEventListener("click", science100);
	document.getElementById("science_200").addEventListener("click", science200);
	document.getElementById("science_300").addEventListener("click", science300);
	document.getElementById("science_500").addEventListener("click", science500);
	
	document.getElementById("math_100").addEventListener("click", math100);
	document.getElementById("math_200").addEventListener("click", math200);
	document.getElementById("math_300").addEventListener("click", math300);
	document.getElementById("math_500").addEventListener("click", math500);
	
	document.getElementById("history_100").addEventListener("click", history100);
	document.getElementById("history_200").addEventListener("click", history200);
	document.getElementById("history_300").addEventListener("click", history300);
	document.getElementById("history_500").addEventListener("click", history500);
	
	document.getElementById("engineering_100").addEventListener("click", engineering100);
	document.getElementById("engineering_200").addEventListener("click", engineering200);
	document.getElementById("engineering_300").addEventListener("click", engineering300);
	document.getElementById("engineering_500").addEventListener("click", engineering500);
}

function Jeopardy_start()
{
	document.getElementById("div_jeopardy").style.display = "block";
	document.getElementById("jeopardy_start").style.display = "block";
	document.getElementById("jeopardy_game").style.display = "none";
	document.getElementById("div_main").style.display = "none";
	document.getElementById("jeopardy_question").style.display = "none";
	document.getElementById("jeopardy_answer").style.display = "none";
}

function ToF()
{
	document.getElementById("div_main").style.display = "none";
	document.getElementById("div_jeopardy").style.display = "none";
	document.getElementById("div_tof").style.display = "block";
	document.getElementById("tof_start").style.display = "block";
	document.getElementById("tof_game").style.display = "none";
}

function Back_main()
{
	window.location.href = "index.html";
}


///True or False
function back()
{
	if (score > 0 || total_questions > 0)
	{
		alert("Going Back, resets game")
	}
	document.getElementById("div_main").style.display = "block";
	document.getElementById("div_jeopardy").style.display = "none";
	document.getElementById("div_tof").style.display = "none";
	
}

function next_tof()
{
	document.getElementById("div_tof").style.display = "block";
	document.getElementById("tof_start").style.display = "none";
	document.getElementById("tof_game").style.display = "block";
	tof_set()
}

function tof_set()
{
	///Sets the questions
	///Questions + Answers (0 for False, 1 for True)
	///Question 1
	question.push("The Adult body has 205 bones.");
	answers.push(0);
	///Question 2
	question.push("Bats are blind.");
	answers.push(0);
	///Question 3
	question.push("Earth's atmosphere is mostly oxygen.");
	answers.push(0);
	///Question 4
	question.push("The human brain is capable of regenerating neurons.");
	answers.push(1);
	///Question 5
	question.push("Gold is the best conductor of electricity.");
	answers.push(0);
	///Question 6
	question.push("The speed of light in a vacuum is approximately 300,000 kilometers per second.");
	answers.push(1);
	///Question 7
	question.push("Water is the most common substance found on Earth.");
	answers.push(1);
	///Question 8
	question.push("All radioactive isotopes have a half-life of more than a year.");
	answers.push(0);
	///Question 9
	question.push("The theory of relativity implies that the laws of physics are the same for all non-accelerating observers.");
	answers.push(1);
	///Question 10
	question.push("Absolute zero is the temperature at which particles have no kinetic energy.");
	answers.push(0);
	
	answer_num = 0;
	score = 0;
	
	document.getElementById("tof_question").innerText =  question[answer_num];
}


function tof_submit()
{
	tof_box = document.getElementById("tof_box").selectedIndex;
	switch(tof_box)
	{
		case 0:
			alert("Answer Required");
			break;
		case 1:
			if (answers[answer_num] == 0)
			{	
				alert("Correct");
				score = score + 100;
			} else {
				alert("Wrong");
			}
			break
		case 2:
			if (answers[answer_num] == 1)
			{
				alert("Correct");
				score = score + 100;
			} else {
				alert("Wrong");
			}
	}
	
	if (answer_num < 9)
	{
		answer_num = answer_num + 1;
		document.getElementById("tof_question").innerText =  question[answer_num];
	} else {
		alert("Your Score is " + String(score));
	}
	
	document.getElementById("tof_box").selectedIndex = 0;
	
	console.log(answers[answer_num]);
	
	
}
	
///jeopardy
function jeopardy_set()
{
	document.getElementById("jeopardy_start").style.display = "none";
	document.getElementById("jeopardy_game").style.display = "block";
	document.getElementById("jeopardy_question").style.display = "none";
	document.getElementById("jeopardy_answer").style.display = "none";

	team1_score = 0;
	team2_score = 0;
	
	total_questions = 0;
	
	
	///From the list question, (0 is 100, 1 is 200, 2 is 300, 3 is 500) <-- Question # and points
	///Science
	science_questions.push("What is the chemical symbol for water?");
	science_answers.push("H2O");
	
	science_questions.push("What planet is known as the Red Planet?");
	science_answers.push("Mars");
	
	science_questions.push("What is the process by which plants make their food using sunlight called?");
	science_answers.push("Photosynthesis");
	
	science_questions.push("Who developed the theory of relativity?");
	science_answers.push("Albert Einstein");
	
	///Math
	math_questions.push("What is the value of pi rounded to two decimal places?");
	math_answers.push("3.14");
	
	math_questions.push("What is the term for a shape with three sides?");
	math_answers.push("Triangle");
	
	math_questions.push("What is the sum of the interior angles of a triangle?");
	math_answers.push("180 degrees");
	
	math_questions.push("What is the name of the theorem that states the square of the hypotenuse of a right triangle is equal to the sum of the squares of the other two sides?");
	math_answers.push("Pythagorean Theorem");
	
	///history
	history_questions.push("Who was the first President of the United States?");
	history_answers.push("George Washington");
	
	history_questions.push("In which year did World War II end?");
	history_answers.push("1945");
	
	history_questions.push("Which ancient civilization built the pyramids of Giza?");
	history_answers.push("Which ancient civilization built the pyramids of Giza?");
	
	history_questions.push("What was the name of the ship that brought the Pilgrims to America in 1620?");
	history_answers.push("The Mayflower");
	
	///Engineering
	
	engineering_questions.push("What is the name of the force that opposes motion between two surfaces that are in contact?");
	engineering_answers.push("Friction");
	
	engineering_questions.push("What does the acronym CAD stand for in design and engineering?");
	engineering_answers.push("Computer-Aided Design");
	
	engineering_questions.push("Who is known as the father of modern electricity and developed the alternating current (AC) electrical system?");
	engineering_answers.push("Nikola Tesla");
	
	engineering_questions.push("What principle explains why heavier-than-air objects can achieve flight, crucial in the design of airplane wings?");
	engineering_answers.push("Bernoulli's Principle");
	
	///Resets the pictures
	document.getElementById("science_100").style.display = "block";
	document.getElementById("science_200").style.display = "block";
	document.getElementById("science_300").style.display = "block";
	document.getElementById("science_500").style.display = "block";
	
	document.getElementById("math_100").style.display = "block";
	document.getElementById("math_200").style.display = "block";
	document.getElementById("math_300").style.display = "block";
	document.getElementById("math_500").style.display = "block";
	
	document.getElementById("history_100").style.display = "block";
	document.getElementById("history_200").style.display = "block";
	document.getElementById("history_300").style.display = "block";
	document.getElementById("history_500").style.display = "block";
	
	document.getElementById("engineering_100").style.display = "block";
	document.getElementById("engineering_200").style.display = "block";
	document.getElementById("engineering_300").style.display = "block";
	document.getElementById("engineering_500").style.display = "block";
}

///Images (Can be simplified/optimized)
function science100()
{
	document.getElementById("jeopardy_start").style.display = "none";
	document.getElementById("jeopardy_game").style.display = "none";
	document.getElementById("jeopardy_answer").style.display = "none";
	document.getElementById("jeopardy_question").style.display = "block";
	
	document.getElementById("science_100").style.display = "none";
	
	document.getElementById("lbl_question").innerText = science_questions[0];
	total_questions = total_questions + 1;
	ans_num = 0;
	ans_power = 100;
	type = "science";
	document.getElementById("jeo_team").selectedIndex = 0;
}

function science200()
{
	document.getElementById("jeopardy_start").style.display = "none";
	document.getElementById("jeopardy_game").style.display = "none";
	document.getElementById("jeopardy_answer").style.display = "none";
	document.getElementById("jeopardy_question").style.display = "block";
	
	document.getElementById("science_200").style.display = "none";
	
	document.getElementById("lbl_question").innerText = science_questions[1];
	total_questions = total_questions + 1;
	ans_num = 1;
	ans_power = 200;
	type = "science";
	document.getElementById("jeo_team").selectedIndex = 0;
}

function science300()
{
	document.getElementById("jeopardy_start").style.display = "none";
	document.getElementById("jeopardy_game").style.display = "none";
	document.getElementById("jeopardy_answer").style.display = "none";
	document.getElementById("jeopardy_question").style.display = "block";
	
	document.getElementById("science_300").style.display = "none";
	
	document.getElementById("lbl_question").innerText = science_questions[2];
	total_questions = total_questions + 1;
	ans_num = 2;
	ans_power = 300;
	type = "science";
	document.getElementById("jeo_team").selectedIndex = 0;
}

function science500()
{
	document.getElementById("jeopardy_start").style.display = "none";
	document.getElementById("jeopardy_game").style.display = "none";
	document.getElementById("jeopardy_answer").style.display = "none";
	document.getElementById("jeopardy_question").style.display = "block";
	
	document.getElementById("science_500").style.display = "none";
	
	document.getElementById("lbl_question").innerText = science_questions[3];
	total_questions = total_questions + 1;
	ans_num = 3;
	ans_power = 500;
	type = "science";
	document.getElementById("jeo_team").selectedIndex = 0;
}

function math100()
{
	document.getElementById("jeopardy_start").style.display = "none";
	document.getElementById("jeopardy_game").style.display = "none";
	document.getElementById("jeopardy_answer").style.display = "none";
	document.getElementById("jeopardy_question").style.display = "block";
	
	document.getElementById("math_100").style.display = "none";
	
	document.getElementById("lbl_question").innerText = math_questions[0];
	total_questions = total_questions + 1;
	ans_num = 0;
	ans_power = 100;
	type = "math";
	document.getElementById("jeo_team").selectedIndex = 0;
}

function math200()
{
	document.getElementById("jeopardy_start").style.display = "none";
	document.getElementById("jeopardy_game").style.display = "none";
	document.getElementById("jeopardy_answer").style.display = "none";
	document.getElementById("jeopardy_question").style.display = "block";
	
	document.getElementById("math_200").style.display = "none";
	
	document.getElementById("lbl_question").innerText = math_questions[1];
	total_questions = total_questions + 1;
	ans_num = 1;
	ans_power = 200;
	type = "math";
	document.getElementById("jeo_team").selectedIndex = 0;
}

function math300()
{
	document.getElementById("jeopardy_start").style.display = "none";
	document.getElementById("jeopardy_game").style.display = "none";
	document.getElementById("jeopardy_answer").style.display = "none";
	document.getElementById("jeopardy_question").style.display = "block";
	
	document.getElementById("math_300").style.display = "none";
	
	document.getElementById("lbl_question").innerText = math_questions[2];
	total_questions = total_questions + 1;
	ans_num = 2;
	ans_power = 300;
	type = "math";
	document.getElementById("jeo_team").selectedIndex = 0;
}

function math500()
{
	document.getElementById("jeopardy_start").style.display = "none";
	document.getElementById("jeopardy_game").style.display = "none";
	document.getElementById("jeopardy_answer").style.display = "none";
	document.getElementById("jeopardy_question").style.display = "block";
	
	document.getElementById("math_500").style.display = "none";
	
	document.getElementById("lbl_question").innerText = math_questions[3];
	total_questions = total_questions + 1;
	ans_num = 3;
	ans_power = 500;
	type = "math";
	document.getElementById("jeo_team").selectedIndex = 0;
}

function history100()
{
	document.getElementById("jeopardy_start").style.display = "none";
	document.getElementById("jeopardy_game").style.display = "none";
	document.getElementById("jeopardy_answer").style.display = "none";
	document.getElementById("jeopardy_question").style.display = "block";
	
	document.getElementById("history_100").style.display = "none";
	
	document.getElementById("lbl_question").innerText = history_questions[0];
	total_questions = total_questions + 1;
	ans_num = 0;
	ans_power = 100;
	type = "history";
	document.getElementById("jeo_team").selectedIndex = 0;
}

function history200()
{
	document.getElementById("jeopardy_start").style.display = "none";
	document.getElementById("jeopardy_game").style.display = "none";
	document.getElementById("jeopardy_answer").style.display = "none";
	document.getElementById("jeopardy_question").style.display = "block";
	
	document.getElementById("history_200").style.display = "none";
	
	document.getElementById("lbl_question").innerText = history_questions[1];
	total_questions = total_questions + 1;
	ans_num = 1;
	ans_power = 200;
	type = "history";
	document.getElementById("jeo_team").selectedIndex = 0;
}

function history300()
{
	document.getElementById("jeopardy_start").style.display = "none";
	document.getElementById("jeopardy_game").style.display = "none";
	document.getElementById("jeopardy_answer").style.display = "none";
	document.getElementById("jeopardy_question").style.display = "block";
	
	document.getElementById("history_300").style.display = "none";
	
	document.getElementById("lbl_question").innerText = history_questions[2];
	total_questions = total_questions + 1;
	ans_num = 2;
	ans_power = 300;
	type = "history";
	document.getElementById("jeo_team").selectedIndex = 0;
}

function history500()
{
	document.getElementById("jeopardy_start").style.display = "none";
	document.getElementById("jeopardy_game").style.display = "none";
	document.getElementById("jeopardy_answer").style.display = "none";
	document.getElementById("jeopardy_question").style.display = "block";
	
	document.getElementById("history_500").style.display = "none";
	
	document.getElementById("lbl_question").innerText = history_questions[3];
	total_questions = total_questions + 1;
	ans_num = 3;
	ans_power = 500;
	type = "history";
	document.getElementById("jeo_team").selectedIndex = 0;
}

function engineering100()
{
	document.getElementById("jeopardy_start").style.display = "none";
	document.getElementById("jeopardy_game").style.display = "none";
	document.getElementById("jeopardy_answer").style.display = "none";
	document.getElementById("jeopardy_question").style.display = "block";
	
	document.getElementById("engineering_100").style.display = "none";
	
	document.getElementById("lbl_question").innerText = engineering_questions[0];
	total_questions = total_questions + 1;
	ans_num = 0;
	ans_power = 100;
	type = "engineering";
	document.getElementById("jeo_team").selectedIndex = 0;
}

function engineering200()
{
	document.getElementById("jeopardy_start").style.display = "none";
	document.getElementById("jeopardy_game").style.display = "none";
	document.getElementById("jeopardy_answer").style.display = "none";
	document.getElementById("jeopardy_question").style.display = "block";
	
	document.getElementById("engineering_200").style.display = "none";
	
	document.getElementById("lbl_question").innerText = engineering_questions[1];
	total_questions = total_questions + 1;
	ans_num = 1;
	ans_power = 200;
	type = "engineering";
	document.getElementById("jeo_team").selectedIndex = 0;
}

function engineering300()
{
	document.getElementById("jeopardy_start").style.display = "none";
	document.getElementById("jeopardy_game").style.display = "none";
	document.getElementById("jeopardy_answer").style.display = "none";
	document.getElementById("jeopardy_question").style.display = "block";
	
	document.getElementById("engineering_300").style.display = "none";
	
	document.getElementById("lbl_question").innerText = engineering_questions[2];
	total_questions = total_questions + 1;
	ans_num = 2;
	ans_power = 300;
	type = "engineering";
	document.getElementById("jeo_team").selectedIndex = 0;
}

function engineering500()
{
	document.getElementById("jeopardy_start").style.display = "none";
	document.getElementById("jeopardy_game").style.display = "none";
	document.getElementById("jeopardy_answer").style.display = "none";
	document.getElementById("jeopardy_question").style.display = "block";
	
	document.getElementById("engineering_500").style.display = "none";
	
	document.getElementById("lbl_question").innerText = engineering_questions[3];
	total_questions = total_questions + 1;
	ans_num = 3;
	ans_power = 500;
	type = "engineering";
	document.getElementById("jeo_team").selectedIndex = 0;
}

function show_ans()
{
	switch(type)
	{
		case "science":
			document.getElementById("lbl_jeo_ans").innerText = science_answers[ans_num];
			break;
		case "math":
			document.getElementById("lbl_jeo_ans").innerText = math_answers[ans_num];
			break;
		case "history":
			document.getElementById("lbl_jeo_ans").innerText = history_answers[ans_num];
			break;
		case "engineering":
			document.getElementById("lbl_jeo_ans").innerText = engineering_answers[ans_num];
			break;
		default:
			alert("wrong type")
			break;
	}
	
	document.getElementById("jeopardy_start").style.display = "none";
	document.getElementById("jeopardy_game").style.display = "none";
	document.getElementById("jeopardy_answer").style.display = "block";
	document.getElementById("jeopardy_question").style.display = "none";
}

function next_jeo()
{
	team = document.getElementById("jeo_team").selectedIndex;
	switch(team)
	{
		case 0:
			alert("A team must be selected");
			return;
			break;
		case 1:
			team1_score = team1_score + ans_power;
			break;
		case 2:
			team2_score = team2_score + ans_power;
			break;
	}
	
	if (total_questions == 16)
	{
		alert("Team 1: " + team1_score + ".   team 2: " + team2_score)
	}
	
	document.getElementById("jeopardy_start").style.display = "none";
	document.getElementById("jeopardy_game").style.display = "block";
	document.getElementById("jeopardy_answer").style.display = "none";
	document.getElementById("jeopardy_question").style.display = "none";
}	
	
	
	