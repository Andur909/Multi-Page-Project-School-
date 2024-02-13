window.addEventListener("load", Initializer);

function Initializer()
{
	document.getElementById("btn_games").addEventListener("click", games);
	document.getElementById("btn_engine").addEventListener("click", engine);
	document.getElementById("btn_health").addEventListener("click", health);
	document.getElementById("btn_calculator").addEventListener("click", calc);
}

function games()
{
		window.location.href = "Game.html";
}

function engine()
{
	window.location.href = "Engine.html";
}

function health()
{
	window.location.href = "health.html";
}

function calc()
{
	window.location.href = "Calculator.html";
}