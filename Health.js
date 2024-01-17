window.addEventListener("load", Initializer);



///Calculations
var Feet
var inches
var weight
var bmi
var kg
var meters

function Initializer()
{
	///Load
	document.getElementById("main_div").style.display = "block";
	document.getElementById("bmi_info_div").style.display = "none";
	document.getElementById("bmi_calculation_div").style.display = "none";
	
	///Main
	document.getElementById("btn_back_main").addEventListener("click", back_main);
	document.getElementById("btn_bmi").addEventListener("click", bmi_screen);
	
	///BMI Info Screen
	document.getElementById("btn_back_bmi_info").addEventListener("click", back_info_bmi);
	document.getElementById("btn_next_bmi_info").addEventListener("click", next_info_bmi);
	
	///BMI CaLculation Screen
	document.getElementById("txt_ft").addEventListener("keypress", inch_unlock);
	document.getElementById("txt_inch").addEventListener("keypress", weight_unlock);
	document.getElementById("txt_weight").addEventListener("keypress", submit_unlock);
	document.getElementById("btn_bmi_submit").addEventListener("click", bmi_calculate);
	document.getElementById("btn_back_calc").addEventListener("click", back_calc_bmi);
}


///Main Screen
function bmi_screen()
{
	document.getElementById("main_div").style.display = "none";
	document.getElementById("bmi_info_div").style.display = "block";
	document.getElementById("bmi_calculation_div").style.display = "none";
}

function back_main()
{
	alert("Going Back to MAIN");
}

///BMI Info Screen
function back_info_bmi()
{
	document.getElementById("main_div").style.display = "block";
	document.getElementById("bmi_info_div").style.display = "none";
	document.getElementById("bmi_calculation_div").style.display = "none";
}

function next_info_bmi()
{
	document.getElementById("main_div").style.display = "none";
	document.getElementById("bmi_info_div").style.display = "none";
	document.getElementById("bmi_calculation_div").style.display = "block";
	
	document.getElementById("txt_inch").disabled = true;
	document.getElementById("btn_bmi_submit").disabled = true;
	document.getElementById("txt_weight").disabled = true;
}

///BMI Calculation Screen
function inch_unlock()
{
	document.getElementById("txt_inch").disabled = false;
}

function weight_unlock()
{
	document.getElementById("txt_weight").disabled = false;
}

function submit_unlock()
{
	document.getElementById("btn_bmi_submit").disabled = false;
}

function bmi_calculate()
{
	Feet = document.getElementById("txt_ft").value;
	inches = document.getElementById("txt_inch").value;
	weight = document.getElementById("txt_weight").value;

	if (Feet != "" && Feet > -1 && inches != "" && inches > -1 && inches < 13 && weight != "" && weight > 0)
	{
		meters = Feet / 3.281;
		meters = meters + (inches / 39.37);
		kg = weight / 2.205;
		bmi = kg / (meters * meters);
		alert(parseFloat(bmi));
	} else {
		alert("The Information Must Match Your Actual Information")
	}
}

function back_calc_bmi()
{
	document.getElementById("main_div").style.display = "block";
	document.getElementById("bmi_info_div").style.display = "none";
	document.getElementById("bmi_calculation_div").style.display = "none";
}