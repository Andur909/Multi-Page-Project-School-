window.addEventListener("load", Starters);
var question = [];
var answers = [];
let answer_num = 0;
var tof_score;
var tof_box;
var score;


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
	document.getElementById("btn_next_tof").addEventListener("click", next_tof);
	
	document.getElementById("btn_tof_submit").addEventListener("click", tof_submit);
}

function Jeopardy_start()
{
	alert("Jeopardy GAME!!!!!!!");
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
	
	console.log(answers[answer_num]);
	
	
}
	
	